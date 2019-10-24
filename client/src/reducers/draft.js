import {
    USER_ACTION_UPDATE_PERSONAL_INFO,
    USER_ACTION_UPDATE_EDUCATION,
    USER_ACTION_UPDATE_EXPERIENCE,
    USER_ACTION_UPDATE_SKILLS
} from '../actions/index';

const defaultState = {
    personal: {},
    education: {},
    experience: {},
    skills: [],
}

const draft = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ACTION_UPDATE_PERSONAL_INFO:
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}

export default draft