import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPasswords = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(123, "pedro"));
    }, 3500);
  };
};

export const startGoogleLogin = () => {
  return async(dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    const { uid, displayName } = user;
    
    dispatch( login(uid, displayName) );
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});
