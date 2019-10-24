import {
    USER_ACTION_LOGIN,
    USER_ACTION_LOGOUT
} from '../actions/index';

const defaultState = {
    isLoggedIn: false
}

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ACTION_LOGIN:
            return { ...action.payload }
        case USER_ACTION_LOGOUT:
            return { ...action.payload }

        default:
            return state;
    }
}

export default auth