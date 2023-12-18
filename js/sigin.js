const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const doneLink = document.querySelector('.done-link');
const isDoneLink = !!doneLink;
// const btnPopup = document.querySelector('.btnLogin-popup');
registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// })
if(isDoneLink){
    
    doneLink.addEventListener('click', ()=> {
        wrapper.classList.remove('active');
    })
}
const currentUser = localStorage.getItem("currentUser");
// if(currentUser){
//     window.location.href = "file:///C:/Users/MBC/Desktop/movie-website-/    movie.html";
// }