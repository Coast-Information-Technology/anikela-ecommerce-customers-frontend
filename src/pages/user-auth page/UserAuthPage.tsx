import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/common/icon/Icon";

export const UserAuthPage: React.FC = () => {
  const [isSignIn, setSignIn] = useState(true);

  const changeSignInState = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div className="userauth-wrapper">
      <div className="userauth-container">
        <nav className="userauth-nav">
          <Link to="/products/women" className="userauth-link">
            {"<- Continue shopping"}
          </Link>
          <span className="userauth-link" onClick={changeSignInState}>
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </nav>
        <div className="userauth-content">
          {isSignIn ? (
            <SignInAuthSection></SignInAuthSection>
          ) : (
            <SignUpAuthSection></SignUpAuthSection>
          )}
        </div>
        <div className="mt-4"></div>
        <Link className="userauth-link" to="/">
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

const SignInAuthSection: React.FC = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-heading">Sign In</h1>
      <span>with</span>
      <div className="auth-social-wrapper">
        <SocialAuthButton title="Facebook" />
        <SocialAuthButton title="Google" />
      </div>
      <span>or use your email</span>
      <label htmlFor="email" className="a11y-hidden">
        Email
      </label>
      <input
        type="text"
        className="auth-form-control"
        placeholder="Email"
        id="email"
      />
      <label htmlFor="password" className="a11y-hidden">
        Password
      </label>
      <input
        type="password"
        className="auth-form-control"
        placeholder="Password"
        id="password"
      />
      <Link to="/forgot-password" className="auth-link auth-link--dark">
        Forgot password?
      </Link>
      <button type="submit" className="auth-btn--submit">
        Sign Up
      </button>
      <div className="auth-footnote">
        <Link to="/policy" className="auth-link">
          Privacy Policy
        </Link>
        <Link to="/policy#terms" className="auth-link">
          Terms & Conditions
        </Link>
      </div>
    </div>
  );
};

const SignUpAuthSection: React.FC = () => {
  return (
    <div className="auth-container">
      <h1 className="auth-heading">Sign Up</h1>
      <span>with</span>
      <div className="auth-social-wrapper">
        <SocialAuthButton title="Facebook" />
        <SocialAuthButton title="Google" />
      </div>
      <span>or use your email</span>
      <form action="#" className="auth-form">
        <div className="auth-form-row">
          <label htmlFor="firstName" className="a11y-hidden">
            First Name
          </label>
          <input
            type="text"
            className="auth-form-control"
            placeholder="First Name"
            id="firstName"
          />
          <label htmlFor="lastName" className="a11y-hidden">
            Last Name
          </label>
          <input
            type="text"
            className="auth-form-control"
            placeholder="Last Name"
            id="lastName"
          />
        </div>
        <label htmlFor="email" className="a11y-hidden">
          Email
        </label>
        <input
          type="text"
          className="auth-form-control"
          placeholder="Email"
          id="email"
        />
        <div className="auth-form-row">
          <label htmlFor="password" className="a11y-hidden">
            Password
          </label>
          <input
            type="password"
            className="auth-form-control"
            placeholder="Password"
            id="password"
          />
          <label htmlFor="confirmPassword" className="a11y-hidden">
            enter pasword again to confirm
          </label>
          <input
            type="password"
            className="auth-form-control"
            placeholder="Confirm Password"
            id="confirmPassword"
          />
        </div>
      </form>
      <button type="submit" className="auth-btn--submit">
        Sign Up
      </button>
      <div className="auth-footnote">
        <span className="auth-note">
          By creating an account, you agree to our{" "}
          <Link to="/policy#terms">Terms and condition</Link> &{" "}
          <Link to="/policy">Privacy Policy</Link>
        </span>
      </div>
    </div>
  );
};

interface SocialAuthButtonProps {
  title: string;
  iconTitle?: string;
}
const SocialAuthButton: React.FC<SocialAuthButtonProps> = ({
  title,
  iconTitle = "",
}) => {
  return (
    <button className="social-auth-btn">
      <Icon
        title={iconTitle}
        icon={iconTitle}
        className="social-auth-icon"
      ></Icon>
      <span>{title}</span>
    </button>
  );
};
