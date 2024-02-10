const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
var image = document.getElementById("ham-ico");


function toggleImage() {
    if (image.src.endsWith ("images/icon-hamburger.svg")) {
        image.src = "images/icon-close.svg";
    }
    else if (image.src.endsWith ("images/icon-close.svg")) {
        image.src = "images/icon-hamburger.svg";
    }   
}

btn.addEventListener('click',() => {
    toggleImage();
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})