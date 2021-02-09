import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from "reselect";

import "./header.style.scss";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const altimg = <ion-icon name="person-circle-outline"></ion-icon>;
const Header = ({ currentUser, hidden }) => (
  <div className="header sticky-top bg-white">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/shop">
        Contact
      </Link>
      <CartIcon />
      {currentUser ? (
        <>
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
          <img
            className="profile-img"
            src={`${currentUser.photoURL}` ? currentUser.photoURL : altimg}
            alt={""}
          />
        </>
      ) : (
        <Link className="option" to="/sign-in">
          SIGN IN
        </Link>
      )}
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToprops = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToprops)(Header);
