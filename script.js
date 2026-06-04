console.log("Javascript conectado correctamente");

const hamburguesa = document.querySelector(".hamburguesa");

const menu = document.querySelector(".menu");

const cerrar = document.querySelector(".cerrar");

const enlaces = document.querySelectorAll(".menu a");

const overlay = document.querySelector(".overlay");

hamburguesa.addEventListener("click", function(){

    menu.classList.toggle("activo");
    overlay.classList.toggle("activo");

});

cerrar.addEventListener("click", function(){

    menu.classList.remove("activo");
    overlay.classList.remove("activo");

});

enlaces.forEach(function(enlace){

    enlace.addEventListener("click", function(){

        menu.classList.remove("activo");
        overlay.classList.remove("activo");

    });

});

