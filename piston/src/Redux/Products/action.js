import axios from "axios"
import * as types from "./actionTypes";

const fetchProductsRequest = ()=> ({
    type: types.FETCH_PRODUCTS_REQUEST
})

const fetchProductsSuccess = (payload)=> ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload
})

const fetchProductsFailure = ()=> ({
    type: types.FETCH_PRODUCTS_FAILURE
})

export const fetchProducts = (Payload)=> (dispatch)=> {
    dispatch(fetchProductsRequest());
    axios.get('https://ecom-data-project.herokuapp.com/prods',{
        params: {
            ...Payload
        }
    })
    .then((res)=>dispatch(fetchProductsSuccess(res.data)))
    .catch((err)=>dispatch(fetchProductsFailure(console.log(err.message))))
}  

