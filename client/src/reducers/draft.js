import {
    USER_ACTION_UPDATE_PERSONAL_INFO,
    USER_ACTION_UPDATE_EDUCATION,
    USER_ACTION_UPDATE_EXPERIENCE,
    USER_ACTION_UPDATE_SKILLS,
    USER_ACTION_UPDATE_IMAGE,

    USER_ACTION_DELETE_EDUCATION,
    USER_ACTION_DELETE_EXPERIENCE,

    USER_ACTION_CLONE_RESUME_TO_DRAFT,
    USER_ACTION_DELETE_DRAFT,

    USER_ACTION_SELECT_THEME,

} from '../actions/index';

const defaultState = {
    personal: {
        firstname: "",
        lastname: "",
        email: "",
        linkedin: "",
        phone: "",
        address: ""
    },
    education: [],
    experience: [],
    skills: [],
    theme: "",
    image: ""
}

const draft = (state = defaultState, action) => {
    switch (action.type) {
        case USER_ACTION_UPDATE_PERSONAL_INFO:
            return {
                ...state,
                ...action.payload
            }
        case USER_ACTION_UPDATE_EDUCATION:
            return {
                ...state,
                education: [...state.education, action.payload]
            }
        case USER_ACTION_UPDATE_EXPERIENCE:
            return {
                ...state,
                experience: [...state.experience, action.payload]
            }
        case USER_ACTION_UPDATE_SKILLS:
            return {
                ...state,
                skills: action.payload
            }
        case USER_ACTION_DELETE_EDUCATION:
            let education = [...state.education];
            education.splice(action.payload, 1);
            return {
                ...state,
                education: education
            }
        case USER_ACTION_DELETE_EXPERIENCE:
            let experience = [...state.experience];
            experience.splice(action.payload, 1);
            return {
                ...state,
                experience: experience
            }

        case USER_ACTION_CLONE_RESUME_TO_DRAFT:
            return {
                ...action.payload
            }

        case USER_ACTION_DELETE_DRAFT:
            return defaultState

        case USER_ACTION_SELECT_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case USER_ACTION_UPDATE_IMAGE:
            return {
                ...state,
                image: action.payload
            }

        default:
            return state;
    }
}

export default draft