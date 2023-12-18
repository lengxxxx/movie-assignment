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



