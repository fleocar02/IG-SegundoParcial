/* Una de las páginas debe incluir la funcionalidad de mostrar en alguna parte de la página un dato curioso al azar.
El usuario debe poder obtener un nuevo dato curioso al azar al ejecutar un evento. */

// LISTA DE DATOS CURIOSOS
const datosCuriosos = ["Rafael Lozano-Hemmer es un artista mexicano-canadiense especializado en instalaciones interactivas en espacios públicos.",
    "Su obra combina tecnología avanzada como sensores biométricos, robótica y datos en tiempo real.",
    "En su proyecto Vectorial Elevation, ciudadanos controlaban reflectores gigantes a través de internet.",
    "Pulse Room es una instalación que traduce los latidos cardíacos de los visitantes en pulsos de luz.",
    "Su trabajo explora la relación entre el cuerpo humano, la tecnología y la vigilancia.",
    "Ha expuesto sus obras en más de 70 países alrededor del mundo.",
    "Lozano-Hemmer estudió ingeniería antes de dedicarse al arte, lo que influye en su enfoque tecnológico.",
    "Sus instalaciones suelen involucrar la participación activa del público para activar la obra.",
    "Fue ganador del prestigioso premio Ars Electronica por su innovador uso de tecnología en arte.",
    "Utiliza la luz como lenguaje poético para explorar temas de identidad, memoria y presencia."
]

// SELECCIÓN DE ELEMENTOS
const btnCuriosidad = document.querySelector("#boton-curiosidad")
const txtCuriosidad = document.querySelector("#texto-curiosidad")

function mostrarDatoAleatorio() {

    //ELEGIR POSICIÓN AL AZAR DENTRO DEL ARRAY
    const posicionAleatoria = Math.floor(Math.random() * datosCuriosos.length);

    // ACTUALIZAR DATO CURIOSO
    txtCuriosidad.textContent = datosCuriosos[posicionAleatoria];

}

// MOSTRAR UN DATO AL AZAR POR DEFAULT
mostrarDatoAleatorio();

// MOSTRAR UN NUEVO DATO POR EVENTO
btnCuriosidad.addEventListener("click", mostrarDatoAleatorio);