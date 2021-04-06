const burger = document.querySelector('.menu-burger');
const navbar = document.querySelector('.navbar');
const nav_bef = document.querySelector('#nav')
const body = document.querySelector('body');

if (burger) {
    const menu = document.querySelector('.navbar ul');
    burger.addEventListener('click', function (event) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');

        if (burger.classList.contains('_active')) {
            navbar.style.backgroundColor = '#6A7273';
            menu.style.backgroundColor = '#6A7273';
            menu.style.opacity = '0.9';
            nav_bef.style.background = '#6A7273';
        } else {
            navbar.style.backgroundColor = '#050D0D';
            menu.style.backgroundColor = '#050D0D';

        }
    })


}