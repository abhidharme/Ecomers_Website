import axios from "axios";
import * as types from "./actionTypes";

 

const fetch_order_Request = () => ({
    type: types.FETCH_ORDER_REQUEST
})

const fetch_order_Success = (Payload) => ({
    type: types.FETCH_ORDER_SUCCESS,
    Payload
})

const fetch_order_Failure = (Payload) => ({
    type: types.FETCH_ORDER_FAILURE,
    Payload
})

export const fetchOrderData = () => (dispatch) => {
    dispatch(fetch_order_Request());
    axios.get('https://payment-details-data.herokuapp.com/payment')
        .then((r) => dispatch(fetch_order_Success(r.data)))
        .catch((err) => dispatch(fetch_order_Failure(err.data)))

}
 

