
import axios from "axios"
import * as types from "./actionTypes"

export const loginLoading = () => ({
    type: types.LOGIN_LOADING
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = () => ({
    type: types.LOGIN_FAILURE
});



export const loginUser = (cred) => (dispatch) => {
    dispatch(loginLoading())
    axios.post('https://masai-api-mocker.herokuapp.com/auth/login', cred)
        .then((response) => dispatch(loginSuccess({ username: cred.username, token: response.data.token })))
        .catch(() => dispatch(loginFailure(alert("Invalid Details"))))
}

export const logout = () => ({
    type: types.LOGOUT
})
