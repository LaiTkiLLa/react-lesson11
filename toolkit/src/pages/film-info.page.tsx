import React, {useEffect} from "react";
import {useParams} from "react-router";
import {AxiosApi} from "../api/api";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {FilmInfo} from "../types/data.type";
import {saveToFavorite} from "../redux/favorite-films.reducer";
import {setError, setFind, setLoading} from "../redux/search.reducer";
import {saveFilmInfo, setValue} from "../redux/films.reducer";
import {Loader} from "../components/loader.component";
import {ErrorPage} from "./error.page";

export const FilmInfoPage: React.FC = () => {
    const {id} = useParams()
    const dispatch = useAppDispatch()
    const filmInfo: FilmInfo = useAppSelector((state) => state.films)
    const {loading, error, found} = useAppSelector(state => state.search)
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
                        return dispatch(saveFilmInfo(getFilmInfo?.data))
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
        dispatch(saveToFavorite(filmInfo))
    }

    return (
        <div>
            {loading
                ? <Loader/>
                : !error
                ? <div>
                    <div>Title: {filmInfo.film?.Title}</div>
                    <img src={filmInfo.film?.Poster} alt="Постер"/>
                    <div>year: {filmInfo.film?.Year}</div>
                    <div>genre: {filmInfo.film?.Genre}</div>
                    <div>runtime: {filmInfo.film?.Runtime}</div>
                    <div>director: {filmInfo.film?.Director}</div>
                    <div>actors: {filmInfo.film?.Actors}</div>
                    <div>imdbRating: {filmInfo.film?.imdbRating}</div>
                    <button onClick={handleFavorite}>Сохранить в избранное</button>
                </div>
                    : <ErrorPage error={error}/>
            }

        </div>
    )
}