import React from "react";

import "./sign-in-and-sign-up.style.scss";

import SignIn from "../../component/sign-in/sign-in.component";

import SignUp from "../../component/sign-up/sign-up.component";

const SignInAndSignUp = () => (
  <div className="sign-in-and-sign-up container-fluid ">
    <div className="row">
      <SignIn className=' sign-in col-sm-12 col-lg-6'/>
      <SignUp className=' sign-up col-sm-12'/>
    </div>
  </div>
);

export default SignInAndSignUp;
