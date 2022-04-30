import { Action } from "redux"

const initState = {
    products: []
}

export const productReducer = (state = initState, action: {type: string, payload: any}) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload.data
            }
    
        default:
            return state
    }
}