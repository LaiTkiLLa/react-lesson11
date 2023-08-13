import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FilmInfo} from "../types/data.type";

export let InitialState: any = []

export const favoriteFilmsSlice = createSlice({
    name: 'favoriteFilms',
    initialState: InitialState,
    reducers: {
        saveFavorite: (state, action: PayloadAction<FilmInfo | undefined>) => {
            return [...state, action.payload]
        },
        deleteFavorite: (state, action: PayloadAction<string>) => {
            return [state.filter(({film}: {film: FilmInfo}) => film?.imdbID !== action.payload)]
        }
    }
})

export const {saveFavorite, deleteFavorite} = favoriteFilmsSlice.actions
export default favoriteFilmsSlice.reducer