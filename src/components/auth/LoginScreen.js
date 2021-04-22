import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/UseForm/useForm";
import { useDispatch } from "react-redux";
import { login, startGoogleLogin } from "../../actions/auth";

export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ values, handleInputChange, reset ] = useForm({
    email: 'ricardo@gmail.com',
    password: '1234'
  });

  const { email, password } = values;

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch( login(email,password ))
  };

  const handleGoogleSignIn = ()=>{
    dispatch( startGoogleLogin() );
  }


  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={ handleLogin }>
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />

        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={ handleInputChange }
        />

        <button className="btn btn-primary btn-block mt-5" type="submit">
          Login
        </button>
        <Link className="auth__create-account" to="/auth/register">Create new account</Link>
      </form>

      <div className="auth__social-networks">
        <div className="hr-sect">OR</div>
        <div className="google-btn" onClick={ handleGoogleSignIn }>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
      </div>
    </>
  );
};
