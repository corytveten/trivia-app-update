export const addUser = user => {
    return {
        type: 'ADD_USER',
        payload: Object.assign({}, user, { score: 0, isLoggedIn: true })
    }
}

export const loginUser = userId => {
    return {
        type: 'LOGIN_USER',
        userId
    }
}