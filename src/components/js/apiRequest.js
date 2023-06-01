const getData = () => {
    const autorization =
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGE4NTEyODcwZWM0ZDE1NWI5NTRjZDNmODI2NDdhNSIsInN1YiI6IjY0Nzg3OGRjOTM4MjhlMDBhNzYzMmM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hobon98umxQtMcVNaPfXZTIp-elW1yn1DcM2Q842vgs'
    var api = `https://api.themoviedb.org/3/movie/popular?api_key=${autorization}&language=en-US`

    var data = fetch(api).then(response => response.json())
    console.log(data)
    return data
}

getData()
