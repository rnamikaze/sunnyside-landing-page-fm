let burger = document.getElementById('burger');
let navbarMobile = document.getElementsByClassName('navbar-mobile')[0];

burger.onclick = function() {
    navbarMobile.classList.toggle('hide');
}