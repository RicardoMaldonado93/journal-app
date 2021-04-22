import { types } from "../types/types";

export const setErrorAction = (err)=>{
    return( dispatch => dispatch(setError(err)));
};

export const removeErrorAction = ()=>{
    return( dispatch => dispatch(removeError()));
};

export const setError = ( err )=>({
    type: types.uiSetError,
    payload:{
        msgError: err
    }
});

export const removeError = ( err )=>({
    type: types.uiRemoveError,
});