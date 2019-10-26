export const USER_ACTION_UPDATE_PERSONAL_INFO = "UPDATE_PERSONAL_INFO";
export const USER_ACTION_UPDATE_EDUCATION = "UPDATE_EDUCATION";
export const USER_ACTION_UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const USER_ACTION_UPDATE_SKILLS = "UPDATE_SKILLS";

export const USER_ACTION_DELETE_EDUCATION = "DELETE_EDUCATION";
export const USER_ACTION_DELETE_EXPERIENCE = "DELETE_EXPERIENCE";

export const USER_ACTION_CLONE_RESUME_TO_DRAFT = "CLONE_RESUME_TO_DRAFT";
export const USER_ACTION_DELETE_DRAFT = "DELETE_DRAFT";

export const USER_ACTION_SELECT_THEME = "SELECT_THEME";


export const updatePersonalInfo = (data) => {
    return {
        type: USER_ACTION_UPDATE_PERSONAL_INFO,
        payload: {
            personal: { ...data }
        }
    }
}


export const addEducation = (data) => {
    return {
        type: USER_ACTION_UPDATE_EDUCATION,
        payload: { ...data }
    }
}


export const addExperience = (data) => {
    return {
        type: USER_ACTION_UPDATE_EXPERIENCE,
        payload: { ...data }
    }
}

export const removeEducation = (index) => {
    return {
        type: USER_ACTION_DELETE_EDUCATION,
        payload: index
    }
}


export const removeExperience = (index) => {
    return {
        type: USER_ACTION_DELETE_EXPERIENCE,
        payload: index
    }
}


export const editResume = (data) => {
    return {
        type: USER_ACTION_CLONE_RESUME_TO_DRAFT,
        payload: {
            ...data
        }
    }
}

export const clearDraft = () => {
    return {
        type: USER_ACTION_DELETE_DRAFT,
        payload: null
    }
}

export const selectTheme = (theme) => {
    return {
        type: USER_ACTION_SELECT_THEME,
        payload: theme
    }
}

export const updateSkills = (data) => {
    return {
        type: USER_ACTION_UPDATE_SKILLS,
        payload: [...data]
    }
}
