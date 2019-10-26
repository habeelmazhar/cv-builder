export const USER_ACTION_UPDATE_ALL_THEMES = "UPDATE_ALL_THEMES";


export const allThemesUpdate = (data) => {
    return {
        type: USER_ACTION_UPDATE_ALL_THEMES,
        payload: [...data]
    }
}
