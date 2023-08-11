import {Action, FilmInfo} from "../types/data.type";
import {DELETE_FAVORITE, SAVE_FAVORITE} from "../actions/actions";

export let InitialState: any = []
export const favoriteFilmsReducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case SAVE_FAVORITE:
            return [...state, action.payload]
        case DELETE_FAVORITE:
            return [state.filter(({film}: FilmInfo) => film?.imdbID !== action.payload)]
        default:
            return state

    }
}

export const saveToFavorite = (payload: any) => {
    return {
        type: SAVE_FAVORITE,
        payload
    }
}

export const deleteFavorite = (payload: any) => {
    return {
        type: DELETE_FAVORITE,
        payload
    }
}