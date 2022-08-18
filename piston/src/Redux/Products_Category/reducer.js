import * as types from "./actionTypes";

const initialState = {
    loading: false,
    prod_category: [],
    error: false
}

export const ProdReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case types.FETCH_PRODUCTS_CATEGORY_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            };
        case types.FETCH_PRODUCTS_CATEGORY_SUCCESS:
            return {
                ...store,
                loading: false,
                prod_category: payload,
                error: false
            };
        case types.FETCH_PRODUCTS_CATEGORY_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            };
        default:
            return store;
    }
}