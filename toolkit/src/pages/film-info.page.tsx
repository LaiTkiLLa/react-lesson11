import React, {useEffect} from "react";
import {useParams} from "react-router";
import {AxiosApi} from "../api/api";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setError, setFind, setLoading} from "../redux/search.reducer";
import {Loader} from "../components/loader.component";
import {ErrorPage} from "./error.page";
import {setFilmInfo} from '../redux/films.reducer'
import {saveFavorite} from "../redux/favorite-films.reducer";

export const FilmInfoPage: React.FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const {film} = useAppSelector((state) => state.films)
    const {loading, error} = useAppSelector(state => state.search)
    useEffect(() => {
        (async () => {
            try {
                dispatch(setError(''))
                dispatch(setFind(false))
                dispatch(setLoading(true))
                const getFilmInfo = await AxiosApi.getById({id})
                if (getFilmInfo?.status === 200) {
                    setTimeout(() => {
                        dispatch(setFind(true))
                        dispatch(setLoading(false))
                        dispatch(setLoading(false))
                        return dispatch(setFilmInfo(getFilmInfo?.data))
                    }, 2_000)
                }
            } catch (error: any) {
                dispatch(setFind(true))
                dispatch(setLoading(false))
                dispatch(setError(error.message))
            }
        })()
    }, [])
    const handleFavorite = () => {
        dispatch(saveFavorite(film))
    }

    return (
        <div>
            {loading
                ? <Loader/>
                : !error
                ? <div>
                    <div>Title: {film?.Title}</div>
                    <img src={film?.Poster} alt="Постер"/>
                    <div>year: {film?.Year}</div>
                    <div>genre: {film?.Genre}</div>
                    <div>runtime: {film?.Runtime}</div>
                    <div>director: {film?.Director}</div>
                    <div>actors: {film?.Actors}</div>
                    <div>imdbRating: {film?.imdbRating}</div>
                    <button onClick={handleFavorite}>Сохранить в избранное</button>
                </div>
                    : <ErrorPage error={error}/>
            }

        </div>
    )
}