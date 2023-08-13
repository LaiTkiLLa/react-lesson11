import {combineReducers, configureStore} from "@reduxjs/toolkit";
import filmsReducer from "./films.reducer";
import searchReducer from "./search.reducer";
import favoriteFilmsReducer from "./favorite-films.reducer";


const rootReducer = combineReducers({
    films: filmsReducer,
    favoriteFilms: favoriteFilmsReducer,
    search: searchReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']