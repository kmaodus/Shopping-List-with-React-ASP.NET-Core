import { ACTION_TYPES } from "../actions/product"

const initalState = {
    list: []
}

export const product = (state = initalState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state
    }
}