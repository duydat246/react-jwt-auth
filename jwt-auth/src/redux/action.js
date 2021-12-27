import * as type from "./actionType";
import axios from "axios";

const loginStart = () => ({
    type: type.LOGIN_START,
});

const loginSuccess = (token) => ({
    type: type.LOGIN_SUCCESS,
    payload: token,
});

const loginFail = (error) => ({
    type: type.LOGIN_FAIL,
    payload: error,
});

const registerStart = () => ({
    type: type.REGISTER_START,
});

const registerSuccess = (token) => ({
    type: type.REGISTER_SUCCESS,
    payload: token,
});

const registerFail = (error) => ({
    type: type.REGISTER_FAIL,
    payload: error,
});

export const logoutInitiate = () => ({
    type: type.LOGOUT_USER,
});

export const setErrorEmpty = () => ({
    type: type.SET_ERROR_EMPTY,
});

export const loginInitate = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        axios
            .post("http://localhost:5000/api/auth/login", {
                email,
                password,
            })
            .then((response) => {
                console.log("response", response);
                dispatch(loginSuccess(response.data.access_token));
            })
            .catch((error) => dispatch(loginFail(error.response.data.message)));
    };
};

export const registerInitate = (email, password) => {
    return function (dispatch) {
        dispatch(registerStart());
        axios
            .post("http://localhost:5000/api/auth/register", {
                email,
                password,
            })
            .then((response) => {
                console.log("response", response);
                dispatch(registerSuccess(response.data.access_token));
            })
            .catch((error) =>
                dispatch(registerFail(error.response.data.message))
            );
    };
};
