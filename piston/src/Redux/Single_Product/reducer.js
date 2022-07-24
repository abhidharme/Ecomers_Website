import * as types from "./actionType" 

const initState = {
    loading: false,
    currentProduct: {},
    error: false,
}


export const SingleProdReducer = (store = initState, { type, Payload }) => {
    switch (type) {
        case types.GET_SINGLE_PODUCTS_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            }
        case types.GET_SINGLE_PODUCTS_SUCCESS:
            return {
                ...store,
                loading: false,
                currentProduct: Payload,
                error: false
            }
        case types.GET_SINGLE_PODUCTS_FAILURE:
            return {
                ...store,
                loading: false,
                error: false
            }
        default:
            return store;
    }
}