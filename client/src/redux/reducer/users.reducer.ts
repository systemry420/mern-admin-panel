
const initState = {
    users: []
}

export const usersReducer = (state = initState, action: any) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}