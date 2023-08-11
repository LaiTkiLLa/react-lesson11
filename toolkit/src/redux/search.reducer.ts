import {Action} from "../types/data.type";
import {ERROR, FIND, LOADING} from "../actions/actions";


export const InitialState = {
    loading: false,
    error: '',
    found: false
}

export const searchReducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case FIND:
            return {...state, found: action.payload}
        case LOADING:
            return {...state, loading: action.payload}
        case ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export const setLoading = (payload: boolean) => {
    return {
        type: LOADING,
        payload
    }
}

export const setError = (payload: string) => {
    return {
        type: ERROR,
        payload
    }
}

export const setFind = (payload: boolean) => {
    return {
        type: FIND,
        payload
    }
}