import React from 'react';
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
        <h3 className="auth__title">Register</h3>
        <form>
          <input
            className="auth__input"
            type="text"
            placeholder="Name"
            name="name"
            autoComplete="off"
          />

          <input
            className="auth__input"
            type="text"
            placeholder="Email"
            name="email"
            autoComplete="off"
          />
  
          <input
            className="auth__input"
            type="password"
            placeholder="Password"
            name="password"
          />

          <input
            className="auth__input"
            type="password"
            placeholder="Confirm"
            name="password2"
          />
  
          <button className="btn btn-primary btn-block mt-5" type="submit">
            Register
          </button>
          <Link className="auth__create-account" to="/auth/register">Already registered?</Link>
        </form>
  
        <div className="auth__social-networks">
        
        </div>
      </>
    )
}
