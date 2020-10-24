var btnMenu = document.getElementById("btn-menu");
var nav = document.getElementById("nav"); 

btnMenu.addEventListener("click", function(){
    nav.classList.toggle("mostrar");
})

function formRedirect(){
    window.location.href= "form.html";
}

function homeRedirect(){
    window.location.href= "index.html";
}

function aboutUsRedirect(){
    window.location.href= "aboutus.html";
}

function serviceRedirect(){
    window.location.href= "service.html";
}