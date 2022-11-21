import React, { Component } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input-component";
import "./sign.in.styles.scss";

import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In </CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
