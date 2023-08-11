import {FILM_INFO, FIND, SAVE, VALUE} from "../actions/actions";
import {Action, FilmInfo, Films, InitialStateT} from "../types/data.type";

export const InitialState: InitialStateT = {
    title: '',
    films: {},
    film: {}
}

export const filmsReducer = (state = InitialState, action: Action) => {
    switch (action.type) {
        case VALUE:
            return {...state, title: action.payload.title}
        case SAVE:
            return {title: state.title, films: action.payload}
        case FILM_INFO:
            return {title: state.title, film: action.payload}
        default:
            return state
    }
}

export const saveFilms = (payload: Films ) => {
    return {
        type: SAVE,
        payload
    }
}

export const setValue = (payload: any) => {
    return {
        type: VALUE,
        payload
    }
}

export const saveFilmInfo = (payload: FilmInfo | undefined) => {
    return {
        type: FILM_INFO,
        payload
    }
}