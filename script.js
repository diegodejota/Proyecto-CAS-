console.log("Javascript conectado correctamente");

const hamburguesa = document.querySelector(".hamburguesa");

const menu = document.querySelector(".menu");

const cerrar = document.querySelector(".cerrar");

const enlaces = document.querySelectorAll(".menu a");

const overlay = document.querySelector(".overlay");

const slides = document.querySelectorAll(".slide");

const carrusel = document.querySelector(".terapeutas");

const ventanaCarrusel = document.querySelector(".ventana-carrusel");

const btnAnterior = document.querySelector(".anterior");

const btnSiguiente = document.querySelector(".siguiente");

let posicion = 0;
let autoplay;

let indice = 0;

const heroImagen = document.querySelector(".slide");

const heroTitulo = document.getElementById("hero-titulo");

const heroTexto = document.getElementById("hero-texto");

const heroBoton = document.getElementById("hero-boton");


const noticias = [

{
    imagen: "Imagenes retocadas/hero.webp",
    titulo: "CAS Autismo La Pintana",
    texto: "Cada paso es un logro, cada proceso tiene su ritmo.",
    boton: "Contáctanos",
    link: "https://wa.me/56927653017"
},

{
    imagen: "Imagenes retocadas/apadrinamiento.webp",
    titulo: "Apadrina una terapia",
    texto: "Con tu aporte ayudas a que niños y niñas accedan a terapias especializadas y continúen su proceso de desarrollo.",
    boton: "Quiero ayudar",
    link: "#"
},

{
    imagen: "Imagenes retocadas/agendas.webp",
    titulo: "Agendas terapeuticas CAS",
    texto: "Conoce nuestras agendas terapéuticas, diseñadas para acompañar a nuestros usuarios y sus familias en su proceso de desarrollo. Llevate una por un aporte voluntario.",
    boton: "Quiero una agenda",
    link: "#"
},

{
    imagen: "Imagenes retocadas/voluntariosUGM.webp",
    titulo: "Voluntariado UGM",
    texto: "Agradecemos a la universidad Gabriela Mistral por su apoyo en la realización de actividades de voluntariado, quienes permitieron mejorar nuestra fachada y generar un espacio de encuentro y aprendizaje.",
    boton: "Ver más",
    link: "#"
},

{
    imagen: "Imagenes retocadas/habilidades-sociales.webp",
    titulo: "Taller de habilidades sociales",
    texto: "Espacios grupales diseñados para fortalecer la comunicación, interacción y autonomía de nuestros usuarios.",
    boton: "Conocer más",
    link: "#actividades"
},
{
    imagen: "Imagenes retocadas/Huerto.webp",
    titulo: "Taller de Huerto",
    texto: "Actividad dirigidas a padres con el objetivo de embellecer nuestro centro y generar un espacio de encuentro y aprendizaje.",
    boton: "Conocer más",
    link: "#terapias"
},
{
    imagen: "Imagenes retocadas/arreglos.webp",
    titulo: "Seguimos mejorando nuestro centro",
    texto: "Se han realizado multiples arreglos en nuestro centro, con el objetivo de brindar un mejor servicio a nuestros usuarios y sus familias.",
}

];

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

if (heroImagen) {

function cambiarSlide(){

    console.log("cambiando slide");

    heroImagen.style.opacity = "0";

    setTimeout(function(){

        indice++;

        if(indice >= noticias.length){
            indice = 0;
        }

        heroImagen.src = noticias[indice].imagen;

        heroTitulo.textContent = noticias[indice].titulo;

        heroTexto.textContent = noticias[indice].texto;

        if (noticias[indice].boton) {

        heroBoton.textContent = noticias[indice].boton;
        heroBoton.href = noticias[indice].link;
        heroBoton.style.display = "inline-block";

        } else {

        heroBoton.style.display = "none";

}   

        heroImagen.style.opacity = "1";

    },500);

}}

setInterval(cambiarSlide, 8000);


// =====================
// Carrusel terapeutas
// =====================

if (carrusel && ventanaCarrusel) {


    const anchoTarjeta =
    document.querySelector(".terapeuta").offsetWidth + 20;

const totalTarjetas = document.querySelectorAll(".terapeuta").length;

const anchoVentana = document.querySelector(".ventana-carrusel").clientWidth;

const maximo =
    carrusel.scrollWidth -
    document.querySelector(".ventana-carrusel").clientWidth + 20;

btnSiguiente.addEventListener("click", function(){

    posicion += anchoTarjeta;

if(posicion > maximo){

    if(posicion - anchoTarjeta < maximo){

        posicion = maximo;

    }else{

        posicion = 0;

    }

}

    carrusel.style.transform = `translateX(-${posicion}px)`;

    iniciarAutoplay();

});

btnAnterior.addEventListener("click", function(){

    posicion -= anchoTarjeta;

if(posicion < 0){

    if(posicion + anchoTarjeta > 0){

        posicion = 0;

    }else{

        posicion = maximo;

    }

}

    carrusel.style.transform = `translateX(-${posicion}px)`;

    iniciarAutoplay();

});

function moverCarrusel(){

    function reiniciarAutoplay(){

    clearInterval(autoplay);

    autoplay = setInterval(moverCarrusel, 8000);

}

    posicion += 240;

    const maximo =
        carrusel.scrollWidth -
        document.querySelector(".ventana-carrusel").clientWidth;

    if(posicion > maximo){

        posicion = 0;

    }

    carrusel.style.transform = `translateX(-${posicion}px)`;

}

function iniciarAutoplay(){

    clearTimeout(autoplay);

    autoplay = setTimeout(function(){

        moverCarrusel();

        iniciarAutoplay();

    }, 6000);

}

iniciarAutoplay();
}



