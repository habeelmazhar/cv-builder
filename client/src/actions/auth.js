export const USER_ACTION_LOGIN = "LOGIN";
export const USER_ACTION_LOGOUT = "LOGOUT";

export const login = (user) => {
    return {
        type: USER_ACTION_LOGIN,
        payload: {
            userId: user.token,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
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