console.log("Javascript conectado correctamente");

const hamburguesa = document.querySelector(".hamburguesa");

const menu = document.querySelector(".menu");

const cerrar = document.querySelector(".cerrar");

hamburguesa.addEventListener("click", function(){

    menu.classList.toggle("activo");

});

cerrar.addEventListener("click", function(){

    menu.classList.remove("activo");

});