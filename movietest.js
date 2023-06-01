const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4NTEyODcwZWM0ZDE1NWI5NTRjZDNmODI2NDdhNSIsInN1YiI6IjY0Nzg3OGRjOTM4MjhlMDBhNzYzMmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hobon98umxQtMcVNaPfXZTIp-elW1yn1DcM2Q842vgs'
    }
}

fetch(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    options
)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))

