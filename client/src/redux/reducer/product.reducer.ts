import { Action } from "redux"

const initState = {
    products: []
}

export const productReducer = (state = initState, action: Action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return state
    
        default:
            return state
    }
}