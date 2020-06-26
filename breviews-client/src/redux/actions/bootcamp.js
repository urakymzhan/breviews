// import axios from 'axios';
// import {
//     BOOTCAMP_DATA_LOADED,
//     BOOTCAMP_DATA_LOAD_FAILED,
//     REVIEW_POSTED,
//     REVIEW_POST_FAILED
// } from './types';

// export const getBootcampData = name => async dispatch => {
//     try {
//         const res = await axios.get(`${process.env.API_URL}/bootcamps/${name}`);

//         dispatch({
//             type: BOOTCAMP_DATA_LOADED,
//             payload: res.data
//         })
//     } catch (err) {
//         dispatch({
//             type: BOOTCAMP_DATA_LOAD_FAILED,
//             payload: err
//         })
//     }
// }

// export const addBootcampReview = (dataToPost, name) => async  dispatch => {

//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }
//     try {
//         const res = await axios.post(`/api/bootcamps/${name}`, dataToPost, config);
//         dispatch({
//             type: REVIEW_POSTED,
//             // its because backend is giving msg and data together from response
//             payload: res.data.data
//         })
//     } catch (err) {
//         dispatch({
//             type: REVIEW_POST_FAILED,
//             payload: err
//         })
//     }
// }

