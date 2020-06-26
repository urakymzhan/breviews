// import axios from 'axios';
// import { MAIN_DATA_LOADED, MAIN_DATA_LOAD_FAILED } from './types';

// export const getMainPageData = () => async dispatch =>  {

//     try {
//         // ${process.env.REACT_APP_BACKEND_URL/landing} use later instead of proxy
//         const res = await axios.get(`/api/landing`);

//         dispatch({
//             type: MAIN_DATA_LOADED,
//             payload: res.data
//         })
//     } catch(err) {
//         dispatch({
//             type: MAIN_DATA_LOAD_FAILED,
//             payload: err        
//         })
//     }
// }
