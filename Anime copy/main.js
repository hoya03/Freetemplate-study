/*
const toggleBt = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__toogleBtn');
const icons = document.querySelector('.navbar__toogleBtn');

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})*/

const toogleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});