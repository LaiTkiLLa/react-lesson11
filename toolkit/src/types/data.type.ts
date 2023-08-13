export type InitialStateT = {
    title: string,
    films: AllFilmsDescription,
    film?: FilmInfo
}

export type FilmInfo = {
    Title: string,
    Year: string,
    Runtime: string,
    Genre: string,
    Director: string,
    Actors: string,
    Poster: string
    imdbRating: string,
    imdbID: string,
}

export type AllFilmsDescription = {
    [key: number]: {
        Poster: string;
        Title: string;
        Type: string;
        Year: string;
        imdbID: string
    }
}

