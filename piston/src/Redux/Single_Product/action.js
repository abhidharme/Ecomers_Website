import axios from "axios"
import * as types from "./actionType";


const get_Single_Data_Request = () => ({
    type: types.GET_SINGLE_PODUCTS_REQUEST
})

const get_Single_Data_Success = (Payload) => ({
    type: types.GET_SINGLE_PODUCTS_SUCCESS,
    Payload
})

const get_Single_Data_Failure = (Payload) => ({
    type: types.GET_SINGLE_PODUCTS_FAILURE,
    Payload
})

 export const getSingleProduct = (id) => (dispatch) => {
    dispatch(get_Single_Data_Request());
    axios.get(`https://ecom-data-project.herokuapp.com/prods/${id}`)
        .then((res) => dispatch(get_Single_Data_Success(res.data)))
        .catch((err) => dispatch(get_Single_Data_Failure(err.message)))
}