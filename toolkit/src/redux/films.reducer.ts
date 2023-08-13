import {AllFilmsDescription, FilmInfo, InitialStateT} from "../types/data.type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const InitialState: InitialStateT = {
    title: '',
    films: {},
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState: InitialState,
    reducers: {
        value: (state, action: PayloadAction<string>) => {
            return {...state, title: action.payload}
        },
        save: (state, action: PayloadAction<AllFilmsDescription>) => {
            console.log(action)
            return {...state, films: action.payload}
        },
        setFilmInfo: (state, action: PayloadAction<FilmInfo>) => {
            return {...state, film: action.payload}
        }
    }
})

export const {value, save, setFilmInfo} = filmsSlice.actions
export default filmsSlice.reducer