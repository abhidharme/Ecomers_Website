import * as types from "./actionTypes";

const initialState = {
    loading: false,
    order: [],
    error: false
}

export const orderreducer = (store = initialState, { type, Payload }) => {
    switch (type) {
        case types.FETCH_ORDER_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            }
        case types.FETCH_ORDER_SUCCESS:
            return {
                ...store,
                loading: false,
                order: Payload,
                error: false
            }
        case types.FETCH_ORDER_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            }
        default:
            return store;
    }
}