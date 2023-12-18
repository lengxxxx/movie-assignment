'use strict';
const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");
  });

}
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

async function logMovies() {
  const response = await fetch(
    "../data/movie.json"
  );
  const movies = await response.json();
  const timer = setInterval(() => {
    var receivedData = getCookie('obj');
    const mv = movies.results;
    mv.forEach(element => {
      if (element.id == receivedData) {
        const markup = `
            <figure class="movie-detail-banner">

            <img src="${element.poster_path}">

            <button class="play-btn">
              <a href="${element.trailer_path}" style="text-decoration: none; color: white"><ion-icon name="play-circle-outline"></ion-icon></a>
            </button>

          </figure>

          <div class="movie-detail-content">

            <p class="detail-subtitle">New Episodes</p>

            <h1 class="h1 detail-title">
              ${element.title}
            </h1>

            <div class="meta-wrapper">

              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 13</div>

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="ganre-wrapper">
                <a href="#">Comedy,</a>

                <a href="#">Action,</a>

                <a href="#">Adventure,</a>

                <a href="#">Science Fiction</a>
              </div>

              <div class="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time datetime="2021">Release date : ${element.release_date}</time>
                </div>

                <div>
                <ion-icon name="star-half-outline"></ion-icon>
                  <span>${element.vote_average}</span>
                </div>

              </div>

            </div>

            <p class="storyline">
              ${element.overview}
            </p>

            <div class="details-actions">

              <button class="share">
                <ion-icon name="share-social"></ion-icon>

                <span>Share</span>
              </button>

              <div class="title-wrapper">
                <p class="title">Prime Video</p>

                <p class="text">Streaming Channels</p>
              </div>

              <button class="btn btn-primary">
                <ion-icon name="play"></ion-icon>

                <span>Watch Now</span>
              </button>

            </div>

            <a href="${element.trailer_path}" download class="download-btn">
              <span>Download</span>

              <ion-icon name="download-outline"></ion-icon>
            </a>
          </div>
        `;
        document.querySelector('#detail-movie').insertAdjacentHTML('afterbegin', markup);
      }
      const showMore = `  
      <li>
        <div class="movie-card" onClick="setCookie(${element.id})">
          <a href="movie-details.html">
            <figure class="card-banner">
              <img src="${element.poster_path}" >
            </figure>
          </a>

          <div class="title-wrapper">
            <a href="./movie-details.html">
              <h3 class="card-title">${element.title}</h3>
            </a>

            <time>${element.release_date}</time>
          </div>

          <div class="card-meta">
            <div class="badge badge-outline">4K</div>

            <div class="duration">
            </div>

            <div class="rating">
              <ion-icon name="star"></ion-icon>

              <data>${element.vote_average}</data>
            </div>
          </div>

        </div>
      </li>
      `
      document.querySelector('#test').insertAdjacentHTML('beforeend', showMore);
    });
    clearInterval(timer);
  }, 1000);

  return html;
}
logMovies();
function setCookie(value) {
  console.log(value);
  document.cookie = `obj=${value}`;
}



