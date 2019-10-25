export const USER_ACTION_CREATE_RESUME = "CREATE_RESUME";
export const USER_ACTION_UPDATE_RESUME = "UPDATE_RESUME";
export const USER_ACTION_UPDATE_ALL_RESUME = "UPDATE_ALL_RESUME";
export const USER_ACTION_DELETE_RESUME = "DELETE_RESUME";

export const createResume = (data) => {
    return {
        type: USER_ACTION_CREATE_RESUME,
        payload: { ...data }
    }
}

export const updateResume = (id, data) => {
    return {
        type: USER_ACTION_UPDATE_RESUME,
        payload: {
            id, data
        }
    }
}

export const updateAllResume = (data) => {
    return {
        type: USER_ACTION_UPDATE_ALL_RESUME,
        payload: data
    }
}

export const deleteResume = (index) => {
    return {
        type: USER_ACTION_DELETE_RESUME,
        payload: index
    }
}
