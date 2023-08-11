import React, {ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {saveFilms, setValue} from "../redux/films.reducer";
import {AxiosApi} from "../api/api";
import {setError, setFind, setLoading} from "../redux/search.reducer";
import {Loader} from "../components/loader.component";
import classes from "../models/main.module.css";
import {FilmsComponent} from "../components/films.component";
import {ErrorPage} from "./error.page";

export const MainPage: React.FC = () => {

    const dispatch = useAppDispatch()
    const {title} = useAppSelector(state => state.films)
    const {loading, error, found} = useAppSelector(state => state.search)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValue({title: e.target.value}))
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        dispatch(setLoading(true))
        dispatch(setFind(false))
        dispatch(setError(''))
        setTimeout(async () => {
            try {
                const films = await AxiosApi.getByTitle({title})
                dispatch(setFind(true))
                dispatch(setLoading(false))
                if (films?.data?.Response === "False") {
                    return dispatch(setError(films.data.Error))
                }
                return dispatch(saveFilms({...films?.data?.Search}))
            } catch (error: any) {
                dispatch(setFind(true))
                dispatch(setLoading(false))
                return dispatch(setError(error.message))
            }
        }, 2_000)
    }
    return (
        <div className={classes.wrapper}>
            <form onSubmit={handleSubmit} className={classes.wrapper__form}>
                <input type="text" onChange={handleChange} className={classes.wrapper__form__input}/>
                <button className={classes.wrapper__form__btn}>Искать</button>
            </form>
            {loading
                ? <Loader/>
                : !found
                    ? <h3>Введите название фильма</h3>
                    : !error ? <FilmsComponent/> : <ErrorPage error={error}/>
            }
        </div>
    )
}