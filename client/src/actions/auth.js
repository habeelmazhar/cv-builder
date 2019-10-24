export const USER_ACTION_LOGIN = "LOGIN";
export const USER_ACTION_LOGOUT = "LOGOUT";

export const login = (userId) => {
    return {
        type: USER_ACTION_LOGIN,
        payload: {
            userId: userId,
            isLoggedIn: true
        }
    }
}

export const logout = () => {
    return {
        type: USER_ACTION_LOGOUT,
        payload: {
            isLoggedIn: false
        }
    }
}