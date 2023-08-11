import React from "react";
import {useAppSelector} from "../hooks/redux";
import {NavLink} from "react-router-dom";
import classes from "../models/films.module.css";
import {Films} from "../types/data.type";

export const FilmsComponent: React.FC = () => {

    const {films}: { films: Films } = useAppSelector(state => state.films)
    return (
        <div className={classes.wrapper}>
            {Object.values(films).map(film => (
                <NavLink key={film.imdbID} to={film.imdbID}>
                    <div>{film.Title}</div>
                    <div><img src={film.Poster} alt="Постер фильма"/></div>
                </NavLink>
            ))}
        </div>
    )
}