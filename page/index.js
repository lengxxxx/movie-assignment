// const urls = [
//     'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1a59596eb747dae9617c66b93566d54b',
//     'https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=1a59596eb747dae9617c66b93566d54b',
//     'https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2014&api_key=1a59596eb747dae9617c66b93566d54b'
// ];

// window.addEventListener('DOMContentLoaded', () => {
//     // Creacion de promesas para cada catagolo
//     const peticiones = urls.map(peticion => fetch(peticion));
//     // Espera que todas las solicitudes se complementen
//     Promise.all(peticiones).then((values) => {
//         // Comvertimos a cada respuesta en .json()
//         return Promise.all(values.map(r => r.json()))
//     })
//         // Manejamos los datos .json() en la funcion .then
//         .then(catalogos => {
//             const [catalogoUno, catalogoDos, catalogoTres] = catalogos;
//             // Primer Catalogo
//             const populares = document.getElementById('populares')
//             catalogoUno.results.forEach((pelicula) => {
//                 const article = document.createElement('article');
//                 article.classList.add('pelicula');
//                 const img = document.createElement('img');
//                 img.src = 'https://image.tmdb.org/t/p/original/' + pelicula.poster_path;
//                 article.append(img);
//                 populares.append(article);
//             });
//             // Segundo Catalogo
//             const estrenos = document.getElementById('estreno')
//             catalogoDos.results.forEach((pelicula) => {
//                 const article = document.createElement('article');
//                 article.classList.add('pelicula');
//                 const img = document.createElement('img');
//                 img.src = 'https://image.tmdb.org/t/p/original/' + pelicula.poster_path;
//                 article.append(img);
//                 estrenos.append(article);
//             });
//             // Tercer Catalogo
//             const vistos = document.getElementById('vistas')
//             catalogoTres.results.forEach((pelicula) => {
//                 const article = document.createElement('article');
//                 article.classList.add('pelicula');
//                 const img = document.createElement('img');
//                 img.src = 'https://image.tmdb.org/t/p/original/' + pelicula.poster_path;
//                 article.append(img);
//                 vistos.append(article);
//             });
//         })
// });


let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

let MsgHead = document.getElementById('msg');
let GreetHead = document.getElementById('greet');
let SigoutBtn = document.getElementById('signoutbutton');

let Signout = () => {
    sessionStorage.removeItem("user-creds");
    sessionStorage.removeItem("user-info");
    window.location.href = 'sigin.html'
}

let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds"))
        window.location.href = 'sigin.html';
    // console.log();
    else {
        MsgHead.innerText = `user with email "${UserCreds.email}" logged in `;
        GreetHead.innerText = `welcome ${UserInfo.password + " " + UserInfo.username}!`
    }
}

window.addEventListener('load', CheckCred);
SigoutBtn.addEventListener('click', Signout)

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        header.classList.add('header__black')
    } else {
        header.classList.remove('header__black')
    }
});

//dark light mode 

$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".change").text("OFF");
    } else {
        $("body").addClass("dark");
        $(".change").text("ON");
    }
});


async function logMovies() {
    const response = await fetch(
        "../data/movie.json"
    );
    const movies = await response.json();
    console.log("movies::::", movies);

    let newDiv = "";
    const mv = movies.results;
    for (let i = 0; i < mv.length; i++) {
        newDiv += `<div class="card movie_card">
      <img src="${mv[i].poster_path}" class="card-img-top" alt="...">
        <div class="card-body" onClick="setCookie(${mv[i].id})">
                <a href="movie-details.html">
                    <i class="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom"
                        title="Play Trailer">
                    </i>
                </a>
                <h5 class="card-title">${mv[i].title}</h5>
                <span class="movie_info">${mv[i].release_date}</span>
                <span class="movie_info float-right"><i class="fas fa-star text-warning"></i> ${mv[i].vote_average} / 10</span>
            </div>
        </div>`;
    }
    document.getElementById("card-wrapper").innerHTML = newDiv;
    return html;
}
function setCookie(value) {
    console.log(value);
    document.cookie = `obj=${value}`;
}
logMovies();
