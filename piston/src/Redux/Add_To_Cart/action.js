import axios from "axios";
import * as types from "./actionTypes";

const add_cart_Request = () => ({
    type: types.ADD_PRODUCT_CART_REQUEST
})

const add_cart_Success = (Payload) => ({
    type: types.ADD_PRODUCT_CART_SUCCESS,
    Payload
})

const add_cart_Failure = (Payload) => ({
    type: types.ADD_PRODUCT_CART_FAILURE,
    Payload
})

 const addProduct = (data) => (dispatch) => {
    dispatch(add_cart_Request());
    axios.post(`http://localhost:3008/cart`, data)
        .then((r) => dispatch(add_cart_Success(r.data)))
        .then((res)=>dispatch(fetchCartData()))
        .catch((e) => dispatch(add_cart_Failure(e.message)))
}

const fetch_cart_Request = () => ({
    type: types.FETCH_CART_REQUEST
})

const fetch_cart_Success = (Payload) => ({
    type: types.FETCH_CART_SUCCESS,
    Payload
})

const fetch_cart_Failure = (Payload) => ({
    type: types.FETCH_CART_FAILURE,
    Payload
})

const fetchCartData = () => (dispatch) => {
    dispatch(fetch_cart_Request());
    axios.get('http://localhost:3008/cart')
        .then((r) => dispatch(fetch_cart_Success(r.data)))
        .catch((err) => dispatch(fetch_cart_Failure(err.data)))

}


const delete_cart_Request = () => ({
    type: types.REMOVE_CART_REQUEST
})

const delete_cart_Success = (Payload) => ({
    type: types.REMOVE_CART_SUCCESS,
    Payload
})

const delete_cart_Failure = (Payload) => ({
    type: types.REMOVE_CART_FAILURE,
    Payload
})

const deleteProduct = (id)=> (dispatch)=>{
    dispatch(delete_cart_Request());
    axios.delete(`http://localhost:3008/cart/${id}`)
    .then((res)=>{
    dispatch(delete_cart_Success(res.data))})
    .then(()=>dispatch(fetchCartData()))
    .catch((err)=>dispatch(delete_cart_Failure(err.data)))
}


const patch_cart_Request = () => ({
    type: types.PATCH_CART_REQUEST
})

const patch_cart_Success = (Payload) => ({
    type: types.PATCH_CART_SUCCESS,
    Payload
})

const patch_cart_Failure = () => ({
    type: types.PATCH_CART_FAILURE
})

 const patchProduct = (id,data) => (dispatch) => {
    dispatch(patch_cart_Request());
    axios.patch(`http://localhost:3008/cart/${id}`,
    {quantity:`${data}`}
    )
        .then((r) => dispatch(patch_cart_Success(r.data)))
        .then((res)=>dispatch(fetchCartData()))
        .catch((e) => dispatch(patch_cart_Failure(e.message)))
}

export {addProduct , fetchCartData , deleteProduct , patchProduct}