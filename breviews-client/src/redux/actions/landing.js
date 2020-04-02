import axios from 'axios';
import { MAIN_DATA_LOADED, MAIN_DATA_LOAD_FAILED } from './types';

export const getMainPageData = () => async dispatch =>  {

    try {
        const res = await axios.get('/api/landing');

        dispatch({
            type: MAIN_DATA_LOADED,
            payload: res.data
        })
    } catch {
        dispatch({
            type: MAIN_DATA_LOAD_FAILED
        })
    }
}
