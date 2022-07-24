import axios from "axios"
import * as types from "./actionTypes";

const fetchProdRequest = ()=> ({
    type: types.FETCH_PRODUCTS_CATEGORY_REQUEST
})

const fetchProdSuccess = (payload)=> ({
    type: types.FETCH_PRODUCTS_CATEGORY_SUCCESS,
    payload
})

const fetchProdFailure = ()=> ({
    type: types.FETCH_PRODUCTS_CATEGORY_FAILURE
})

export const fetchProdCategory = (Payload)=> (dispatch)=> {
    dispatch(fetchProdRequest());
    axios.get('https://ecom-data-project.herokuapp.com/prods',{
        params: {
            ...Payload
        }
    })
    .then((res)=>dispatch(fetchProdSuccess(res.data)))
    .catch((err)=>dispatch(fetchProdFailure(console.log(err.message))))
}  

