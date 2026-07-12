// SELECCIONAR LOS ELEMENTOS
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxTitulo = document.querySelector("#lightbox-titulo");
const lightboxAnio = document.querySelector("#lightbox-anio");

document.querySelectorAll(".galeria-item").forEach(item => {
    item.addEventListener("click", () => {

        // CAPTURAR ELEMENTOS DEL ITEM CLICKEADO
        const imagenItem = item.querySelector("img");
        const tituloItem = item.querySelector("h3");
        const anioItem = item.querySelector("p");

        // ASIGNAR VALORES AL LIGHTBOX
        lightboxImg.src = imagenItem.src;
        lightboxTitulo.innerHTML = tituloItem.innerHTML;
        lightboxAnio.innerHTML = anioItem.innerHTML;

        // MOSTRAR LIGHTBOX
        lightbox.style.display = "flex";
    });
});

// CERRAR LIGHTBOX

const botonCerrar = document.querySelector(".lightbox-cerrar");
botonCerrar.addEventListener("click", function() {
    lightbox.style.display = "none";
})

// CAMBIO DE DISEÑO DE GALERÍA
const btnDisenio = document.querySelector("#btn-disenio");
const galeriaContenedor = document.querySelector("#galeria-fotos");

btnDisenio.addEventListener("click", () => {

    const items = document.querySelectorAll(".galeria-item");

    if (galeriaContenedor.style.backgroundColor === "rgb(1, 19, 28)") {

        galeriaContenedor.style.backgroundColor = "";

        items.forEach(item => {
            item.style.width = "calc(33.333% - 14px)";
            item.style.backgroundColor = "#ffffff";
            item.style.borderColor = "#dddddd";

            item.querySelector("h3").style.color = "#111111";
        });

    } else {
        galeriaContenedor.style.backgroundColor = "rgb(1, 19, 28)";

        items.forEach(item => {
            item.style.width = "calc(50% - 10px)";
            item.style.backgroundColor = "#01131c";
            item.style.borderColor = "#ff007b";

            item.querySelector("h3").style.color = "#ffffff";
        });
    }
});