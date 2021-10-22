const btnHamburger = document.querySelector('.header-right > a');

const display = document.querySelector('.hamburger-menu');

btnHamburger.addEventListener ('click', function() {
    display.classList.toggle('active')
})

const btnClose = document.querySelector('.hamburger-menu .close');

btnClose.addEventListener ('click', function() {
    display.classList.toggle('active')
})


