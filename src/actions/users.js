export const addUser = user => {
    return {
        type: 'ADD_USER',
        user: Object.assign({}, user, { score: 0})
    }
}

export const loginUser = userId => {
    return {
        type: 'LOGIN_USER',
        userId
    }
}