import axios from 'axios';
import {
    BOOTCAMP_DATA_LOADED,
    BOOTCAMP_DATA_LOAD_FAILED,
    REVIEW_POSTED,
    REVIEW_POST_FAILED
} from './types';

export const getBootcampData = name => async dispatch => {
    // console.log("name from action: ", name)
    try {
        const res = await axios.get(`/api/bootcamps/${name}`);
        dispatch({
            type: BOOTCAMP_DATA_LOADED,
            payload: res.data
        })
    }catch(err) {
        dispatch({
            type: BOOTCAMP_DATA_LOAD_FAILED,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const addReview = (dataToPost, name)  => async  dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/bootcamps/${name}`, dataToPost, config);
        dispatch({
            type: REVIEW_POSTED,
            payload: res.data
        })
    }catch(err) {
        dispatch({
            type: REVIEW_POST_FAILED,
            payload: err
        })
    }
}

