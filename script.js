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
    imagen: "imagenes retocadas/hero.webp",
    titulo: "CAS Autismo La Pintana",
    texto: "Cada paso es un logro, cada proceso tiene su ritmo.",
    boton: "Contáctanos",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría conocer los servicios del centro."
},

{
    imagen: "imagenes retocadas/apadrinamiento.webp",
    titulo: "Apadrina una terapia",
    texto: "Con tu aporte ayudas a que niños y niñas accedan a terapias especializadas y continúen su proceso de desarrollo.",
    boton: "Quiero ayudar",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría conocer sobre el apadrinamiento de terapias."
},

{
    imagen: "imagenes retocadas/agendas.webp",
    titulo: "Agendas terapéuticas CAS",
    texto: "Conoce nuestras agendas terapéuticas, diseñadas para acompañar a nuestros usuarios y sus familias en su proceso de desarrollo. Llévate una por un aporte económico voluntario.",
    boton: "Quiero una agenda",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría reservar una agendas terapéutica."
},

{
    imagen: "imagenes retocadas/voluntarios2.webp",
    titulo: "Voluntariado UGM",
    texto: "Agradecemos a la universidad Gabriela Mistral por su apoyo en la realización de actividades de voluntariado.",
    boton: "Ver más",
    tipo: "pagina",
    link: "actividades.html"
},  

{
    imagen: "imagenes retocadas/habilidades-sociales.webp",
    titulo: "Taller de habilidades sociales",
    texto: "Espacios grupales diseñados para fortalecer la comunicación, interacción y autonomía de nuestros usuarios.",
    boton: "Conocer más",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría conocer el funcionamiento de los talleres de habilidades sociales."
},
{
    imagen: "imagenes retocadas/Huerto.webp",
    titulo: "Taller de Huerto",
    texto: "Actividad dirigidas a padres con el objetivo de embellecer nuestro centro y generar un espacio de encuentro y aprendizaje.",
    boton: "Conocer más",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría conocer el funcionamiento del taller de huerto."
},
{
    imagen: "imagenes retocadas/arreglos.webp",
    titulo: "Seguimos mejorando nuestro centro",
    texto: "Se han realizado múltiples arreglos en nuestro centro, con el objetivo de brindar un mejor servicio a nuestros usuarios y sus familias.",
    boton: "Conocer más",
    tipo: "whatsapp",
    mensaje: "Hola, me gustaría conocer los arreglos realizados en nuestro centro."
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

        if(noticias[indice].tipo === "whatsapp"){

        heroBoton.onclick = function(){

            abrirWhatsApp(noticias[indice].mensaje);

        };

        }

        else if(noticias[indice].tipo === "pagina"){

        heroBoton.onclick = function(){

            window.location.href = noticias[indice].link;

        };

        }

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


function abrirWhatsApp(mensaje){

    const numero = "56927653017";

    window.open(
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );

}