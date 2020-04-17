import {
    BOOTCAMP_DATA_LOADED,
    BOOTCAMP_DATA_LOAD_FAILED,
    REVIEW_POSTED,
    REVIEW_POST_FAILED
} from '../actions/types';

const initialState = {
    localData: [],
    error: ''
}

export default function(state = initialState, action) {
    const { type, payload } =  action;

    switch (type) {
        case BOOTCAMP_DATA_LOADED:
            return {
                ...state,
                localData: payload
            }
        case BOOTCAMP_DATA_LOAD_FAILED:
            return {
                ...state,
                error: payload
            }
        case REVIEW_POSTED:
            return {
                ...state,
                localData: [...state, payload]
            }
        case REVIEW_POST_FAILED:
            return {
                ...state,
                error: payload
            }
        default:
            return state;
    }
}