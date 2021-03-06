import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../component/checkout-item/checkout-item.componenet";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.style.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-bloack">
        <span>Product</span>
      </div>

      <div className="header-bloack">
        <span>Discription</span>
      </div>

      <div className="header-bloack">
        <span>Quantity</span>
      </div>

      <div className="header-bloack">
        <span>Price</span>
      </div>

      <div className="header-bloack">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
