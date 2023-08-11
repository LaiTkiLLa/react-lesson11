import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {filmsReducer} from "./films.reducer";
import {favoriteFilmsReducer} from "./favorite-films.reducer";
import {searchReducer} from "./search.reducer";


const rootReducer = combineReducers({
    films: filmsReducer,
    favoriteFilms: favoriteFilmsReducer,
    search: searchReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']