import React from "react";

import "./App.css";

import { connect } from "react-redux";

import ShopPage from "./pages/shopepage/shop.component";

import setCurrentUser from "./redux/user/user.action";

import HomePage from "./pages/homepage/homepage.component";

import Header from "./component/header/header-component.jsx";

import { Switch,Route, Redirect} from "react-router-dom/cjs/react-router-dom.min";

import { auth, createUserProfileDocument, signInWithGoogle } from "./firebase/firebase.utils";

import SignInAndSignUp from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.jsx";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            photoURL: userAuth.photoURL,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
