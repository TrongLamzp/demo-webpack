import $ from 'jquery'
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');
console.log(menu);
icon.addEventListener('click', handleClick);
function handleClick(e) {
    menu.classList.toggle('invisible');
}

const h11 = document.querySelector("h1");
h11.addEventListener('click', function() {
    h11.textContent = "Su dung jquery";
})