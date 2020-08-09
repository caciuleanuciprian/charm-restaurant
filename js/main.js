let overlayContent = document.querySelector(".nav-overlay-content");
let navOverlay = document.querySelector(".nav-overlay");
let activeOverlay = document.querySelectorAll(".nav-overlay-content active");
let navContainer = document.querySelector(".nav-container");
let navIds = document.getElementById("nav");


function openNavigation(){
    overlayContent.classList.add("active");
}

function closeNavigation(){
    overlayContent.classList.remove("active");
}


document.addEventListener("click", function(event){
    let targetElement = event.target;
    if(targetElement == navIds || targetElement == navContainer){
        closeNavigation();
    }
})

window.addEventListener("scroll", function(){
    let notsticky = document.getElementById("notsticky");
    notsticky.classList.toggle("sticky", window.scrollY > 0);
})