import { MAIN_DATA_LOADED, MAIN_DATA_LOAD_FAILED } from '../actions/types';

const initialState = {
    mainpageData: [],
    isLoaded: false,
    error: ''
};

export default function( state = initialState, action ) {
    const { type, payload } = action;

    switch(type) {
        case MAIN_DATA_LOADED:
            return {
                ...state,
                mainpageData: payload,
                isLoaded: true
            }
        case MAIN_DATA_LOAD_FAILED:
            return {
                ...state,
                isLoaded: false,
                error: payload
            }
        default:
            return state;
    }
}