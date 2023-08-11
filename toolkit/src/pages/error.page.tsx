import React from "react";

export const ErrorPage: React.FC<{error: string}> = ({error}) => {
    return (
        <div>
            {error
            ? <h1>Произошла ошибка {error}</h1>
            : <h1>Страницы не существует</h1>
            }
        </div>
    )
}