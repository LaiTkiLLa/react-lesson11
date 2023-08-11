import {SAVE_FAVORITE, FILM_INFO, FIND, SAVE, DELETE_FAVORITE, LOADING, ERROR, VALUE} from "../actions/actions";

export type Action = {
    type: typeof SAVE | typeof FIND | typeof FILM_INFO | typeof SAVE_FAVORITE | typeof DELETE_FAVORITE | typeof LOADING | typeof ERROR | typeof VALUE
    payload: any
}

export type InitialStateT = {
    title: string,
    films: object,
    film: object
}

export type Films = {
    [key: number]: {
        Poster: string
        Title: string
        Type: string
        Year: string
        imdbID: string
    }
}

export type FilmInfo = {
    film: {
        Title: string,
        Year: string,
        Runtime: string,
        Genre: string,
        Director: string,
        Actors: string,
        Poster: string
        imdbRating: string,
        imdbID: string,
    }
}
