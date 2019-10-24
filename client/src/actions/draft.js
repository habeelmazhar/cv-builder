export const USER_ACTION_UPDATE_PERSONAL_INFO = "UPDATE_PERSONAL_INFO";
export const USER_ACTION_UPDATE_EDUCATION = "UPDATE_EDUCATION";
export const USER_ACTION_UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const USER_ACTION_UPDATE_SKILLS = "UPDATE_SKILLS";

export const updatePersonalInfo = (data) => {
    return {
        type: USER_ACTION_UPDATE_PERSONAL_INFO,
        payload: {
            draft:{
                personal: {...data}
            }
        }
    }
}