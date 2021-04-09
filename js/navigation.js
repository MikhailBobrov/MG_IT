// const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', navFix);

function navFix() {
    console.log(navbar.offsetHeight);
    console.log(window.scrollY);

    if (window.scrollY > navbar.offsetHeight + 100) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
}