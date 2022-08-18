import * as types from "./actionTypes";

const initialState = {
    loading: false,
    products: [],
    error: false
}

export const reducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_PRODUCTS_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            };
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...store,
                loading: false,
                products: payload,
                error: false
            };
        case types.FETCH_PRODUCTS_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            };
        default:
            return store;
    }
}