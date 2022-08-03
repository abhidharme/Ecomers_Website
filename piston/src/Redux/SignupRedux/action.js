
import * as types from "./actionTypes"

export const singLoading = () => ({
    type: types.SIGN_LOADING
});

export const signSuccess = (payload) => ({
    type: types.SIGN_SUCCESS,
    payload
});

export const singError = () => ({
    type: types.SIGN_ERROR
});

export const Register = (name, email, password, username, mobile, description) => (dispatch) => {
    dispatch(singLoading());
    fetch(" https://masai-api-mocker.herokuapp.com/auth/register", {
        method: "POST",
        body: JSON.stringify(name, email, password, username, mobile, description),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json())
        .then((res) => {
            dispatch(signSuccess(name, email, password, username, mobile, description))

        })
        .catch((err) => dispatch(singError()))
}

