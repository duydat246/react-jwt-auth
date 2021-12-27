import * as type from "./actionType";

const initialState = {
    user: null,
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.LOGIN_START:
        case type.REGISTER_START:
            return {
                ...state,
                loading: true,
            };
        case type.LOGIN_SUCCESS:
        case type.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case type.LOGIN_FAIL:
        case type.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case type.LOGOUT_USER:
            return {
                ...state,
                user: null,
            };

        case type.SET_ERROR_EMPTY:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
