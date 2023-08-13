import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {deleteFavorite} from "../redux/favorite-films.reducer";
import {FilmInfo} from "../types/data.type";

export const FavoriteFilmsPage: React.FC = () => {
    const state: FilmInfo[] = useAppSelector(state => state.favoriteFilms)
    const dispatch = useAppDispatch()
    const handleDelete = (id: string) => {
       dispatch(deleteFavorite(id))
    }
    return (
        <div>
            {state.map((film) => (
                <div key={film?.imdbID}>
                    <div>{film?.Title}</div>
                    <div>Продолжительность: {film?.Runtime}</div>
                    <img src={film?.Poster} alt="Постер"/>
                    <div><button onClick={() => handleDelete(film?.imdbID)}>Удалить из избранного</button></div>
                </div>
            ))}
        </div>
    )
}