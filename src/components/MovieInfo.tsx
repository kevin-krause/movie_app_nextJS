import React from 'react'

const movie_name = document.getElementById('#movie-name')
const movie_year = document.getElementById('#movie-year')
const overview = document.getElementById('#overview')

const getData = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4NTEyODcwZWM0ZDE1NWI5NTRjZDNmODI2NDdhNSIsInN1YiI6IjY0Nzg3OGRjOTM4MjhlMDBhNzYzMmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hobon98umxQtMcVNaPfXZTIp-elW1yn1DcM2Q842vgs'
        }
    }

    const api = `'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    ${options}`

    const data = fetch(api).then(response => response.json())

    return data
}

const showData = () => {
    const data = getData()
    movie_name.innerText = data.original_title
}

export const MovieInfo = () => {
    return (
        <div>
            <h1 id="movie-name">original_title</h1>
            <h2 id="movie-year">release_date</h2>
            <h2 id="overview">overview</h2>
        </div>
    )
}
