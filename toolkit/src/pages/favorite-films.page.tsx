import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {FilmInfo} from "../types/data.type";
import {deleteFavorite} from "../redux/favorite-films.reducer";

export const FavoriteFilmsPage: React.FC = () => {
    const state: [FilmInfo] = useAppSelector(state => state.favoriteFilms)
    const dispatch = useAppDispatch()
    const handleDelete = (id: string) => {
       dispatch(deleteFavorite(id))
    }
    return (
        <div>
            {state.map((film) => (
                <div key={film.film?.imdbID}>
                    <div>{film.film?.Title}</div>
                    <div>Продолжительность: {film.film?.Runtime}</div>
                    <img src={film.film?.Poster} alt="Постер"/>
                    <div><button onClick={() => handleDelete(film.film?.imdbID)}>Удалить из избранного</button></div>
                </div>
            ))}
        </div>
    )
}