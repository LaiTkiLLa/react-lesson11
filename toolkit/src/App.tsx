import React from 'react';
import {MainPage} from "./pages/main.page";
import {Route, Routes} from 'react-router'
import {NavLink} from "react-router-dom";
import classesApp from "./models/app.module.css";
import classesHeader from "./models/header.module.css"
import {ErrorPage} from "./pages/error.page";
import {FilmInfoPage} from "./pages/film-info.page";
import {FavoriteFilmsPage} from "./pages/favorite-films.page";

function App() {
    return (
        <div className={classesApp.container}>
            <div className={classesHeader.wrapper}>
                <div className={classesHeader.container__nav}>
                    <NavLink to=''>Главная</NavLink>
                    <NavLink to='favorite'>Избранное</NavLink>
                </div>
            </div>
            <Routes>
                <Route path='' element={<MainPage/>}/>
                <Route path=':id' element={<FilmInfoPage/>}/>
                <Route path='favorite' element={<FavoriteFilmsPage/>}/>
                <Route path='*' element={<ErrorPage error={''}/>}/>
            </Routes>
        </div>
    );
}

export default App;
