import React from "react";

import "./sign-in.style.scss";

import { Link } from "react-router-dom";

import FormInput from "../form-input/form-input.component";

import CustomButton from "../custom-button/custom-button";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      alert(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Already have an account</h2>
        <span>Sign in with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            lable="email"
            value={this.state.email}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            lable="password"
            handleChange={this.handleChange}
            required
          />
          <div className="sign-in-btn">
            <CustomButton type="submit">Sign In</CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google{" "}
              <img
                className="google-img"
                src="https://img.icons8.com/color/48/000000/google-logo.png"
                alt=""
              />{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
