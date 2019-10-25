import {
    USER_ACTION_CREATE_RESUME,
    USER_ACTION_UPDATE_RESUME,
    USER_ACTION_UPDATE_ALL_RESUME,
    USER_ACTION_DELETE_RESUME
} from '../actions/index';

const defaultState = []

const resume = (state = defaultState, action) => {
    console.log('action: ', action);
    console.log('state.resume: ', state);

    switch (action.type) {
        case USER_ACTION_CREATE_RESUME:
            return [
                ...state,
                { ...action.payload }
            ]
        case USER_ACTION_UPDATE_RESUME:
            let resumes = [...state];
            for (const [i, resume] of resumes.entries()) {
                if(resume._id === action.payload.id){
                    resumes.splice(i, 1);
                    break;
                }
            }
            resumes.push(action.payload.data);
            return resumes
        case USER_ACTION_UPDATE_ALL_RESUME:
            return [
                ...action.payload
            ]
        case USER_ACTION_DELETE_RESUME:
            let resume = [...state];
            resume.splice(action.payload, 1);
            return resume
        default:
            return state;
    }
}

export default resume