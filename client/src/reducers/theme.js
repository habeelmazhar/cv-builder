import {
    USER_ACTION_UPDATE_ALL_THEMES,
} from '../actions/index';

const defaultState = []

const themes = (state = defaultState, action) => {

    console.log('action.payload: ', action.payload);
    switch (action.type) {
        case USER_ACTION_UPDATE_ALL_THEMES:
            return [
                ...action.payload
            ]
       
        default:
            return state;
    }
}

export default themes