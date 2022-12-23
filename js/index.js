const requestURL = "../json/peliculas.json";

async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.peliculas.leght; index++)
    {
        const movieSection = document.getElementById('moviesSection');

        let id = movies.peliculas[index].id;
        let img = movies.peliculas[index].caratula;
        let title = movies.peliculas[index].titulo;
        let description = movies.peliculas[index].descripcion;
        let genre = movies.peliculas[index].genero;
        let director = movies.peliculas[index].director;

        playlistSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${photo}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="genre">${genre}</p>
                    <p class="author">${author}</p>
                </div>
            </div>
        `
    }
})