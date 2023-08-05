
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./actionTypes";
import axios from "axios";

export const fetchDataRequest = () => {
    return{
        type: FETCH_DATA_REQUEST
    }
}

export const fetchDataSuccess = (data) => {
    return{
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}

export const fetchDataFailure = (error) => {
    return{
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}


export const fetchData = () => async (dispatch) => {
    dispatch(fetchDataRequest())

    try{
        const response = await axios.get(' https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchDataSuccess(response.data))
    }
    catch(error){
        dispatch(fetchDataFailure(error.message))
    }
}