export default function usersReducer(state = [], action) {
    
    switch (action.type) {
        
        case 'ADD_USER':
            return state.concat(action.user)

        // case 'LOGIN_USER':
        //     return state.find(user => user.id === action.quoteId);

        default:
            return state;
    }
}
