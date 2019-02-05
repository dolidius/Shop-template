const menu = document.querySelector('.menu');
const menu_button = document.querySelector('.menu__button');
const menu_button_icon = document.querySelector('.menu__button i');
let opened = false;

menu_button.addEventListener('click', openMenu);

function openMenu(){
    if(!opened){
        menu_button_icon.classList = "fas fa-times";
        menu.style.right = '0';
    }else{
        menu_button_icon.classList = "fas fa-bars";
        menu.style.right = '-32rem';
    }


    opened = !opened;
}

const menu_items = document.querySelectorAll('.menu__item');
const home_icon = document.querySelector('#home_icon');
const landing = document.querySelector('.landing');
const products = document.querySelector('.products');

home_icon.addEventListener('click', openHome);
menu_items.forEach(menu_item => menu_item.addEventListener('click', openProducts));

function openHome(){
    landing.style.display = "block";
    products.style.display = "none";
}

function openProducts(){
    landing.style.display = "none";
    products.style.display = "block";
    menu_button_icon.classList = "fas fa-bars";
    menu.style.right = '-32rem';
    opened = !opened;
}