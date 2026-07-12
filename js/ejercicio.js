/*»»»»» Ejercicio «««««

Armar un sistema para controlar el funcionamiento de las luces móviles de las obras de Rafael Lozano-Hemmer.

Se deberán ingresar los datos de la cantidad de obras que se deben desarrollar y, por cada obra, su nombre, la cantidad de luces moviles que utiliza y el tiempo de funcionamiento por día en horas. Ingresar también el consumo por hora de electricidad de cada luz móvil y el costo por kWh. 

Se quiere conocer:
1. el consumo diario total en kWh entre todas las obras y el consumo diario promedio por obra
2. la obra con mayor tiempo de funcionamiento y su costo diario
3. el porcentaje de obras que utilizan más de 20 luces

Una vez que se obtienen los resultados se debe habilitar un botón para reiniciar.


»»»»» Tener en cuenta «««««

- Todos los datos deben ser validados.
- Los datos deben ser ingresados utilizando formularios.
- Se deben habilitar y deshabilitar las opciones para el ingreso de datos según lo requiera cada momento de ejecución.
-- Cuando se debe ingresar una cantidad determinada de datos y se cumple esa cantidad, se debe deshabilitar la opción para seguir ingresando.
-- Las opciones para calcular resultados no se deben habilitar hasta que se haya finalizado la carga de datos necesaria para poder realizar los cálculos. 
*/


// SELECCIÓN DE ELEMENTOS

const formulario = document.querySelector(".ejercicio");
const btnAgregar = document.querySelector("#agregar");
const btnReset = document.querySelector("#reiniciar");

const txtCantidadObras = document.querySelector("#cantidad-obras");
const txtConsumoDiario = document.querySelector("#consumo-diario");
const txtMayorTiempo = document.querySelector("#mayor-tiempo");
const txtPorcentajeObras = document.querySelector("#porcentaje-obras");

// VARIABLES

let totalObras = 0;
let consumoDiarioTotal = 0;
let obrasMasDe20Luces = 0;

let maxTiempoFuncionamiento = -1;
let obraMayorTiempoNombre = "";
let obraMayorTiempoCosto = 0;

// ESTADO DE BOTÓN DESHABILITADO
btnReset.disabled = true;

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    // CAPTURA DE INPUTS FORMULARIO
    const nombreObra = document.querySelector("#nombre-obra").value;
    const cantidadLuces = Number(document.querySelector("#cantidad-luces").value);
    const tiempoFuncionamiento = Number(document.querySelector("#tiempo-funcionamiento").value);
    const consumoHora = Number(document.querySelector("#consumo-hora").value);
    const costoKwh = Number(document.querySelector("#costo-kwh").value);

    // VALIDACIÓN

    if (!nombreObra) {
        alert("Por favor, ingrese un nombre válido para la obra.");
        return;
    }

    if (isNaN(cantidadLuces) || cantidadLuces <= 0) {
        alert("La cantidad de luces debe ser mayor a 0.");
        return;
    }

    if (isNaN(tiempoFuncionamiento) || tiempoFuncionamiento <= 0 || tiempoFuncionamiento > 24) {
        alert("El tiempo de funcionamiento diario debe ser entre 0 y 24 hs.");
        return;
    }

    if (isNaN(consumoHora) || consumoHora <= 0) {
        alert("El consumo por hora debe ser un número positivo.");
        return;
    }

    if (isNaN(costoKwh) || costoKwh <= 0) {
        alert("El costo por kWh debe ser un número positivo.");
        return;
    }

    // CÁLCULOS POR OBRA

    totalObras++;

    // CONSUMO DIARIO (luces * horas * consumo x hora)
    const consumoDiarioObra = cantidadLuces * tiempoFuncionamiento * consumoHora;
    consumoDiarioTotal += consumoDiarioObra

    // COSTO DIARIO
    const costoDiarioObra = consumoDiarioObra * costoKwh;

    // EVALUAR OBRA MAYOR TIEMPO DE FUNCIONAMIENTO

    if (tiempoFuncionamiento > maxTiempoFuncionamiento) {
        maxTiempoFuncionamiento = tiempoFuncionamiento;
        obraMayorTiempoNombre = nombreObra;
        obraMayorTiempoCosto = costoDiarioObra;
    }

    // EVALUAR SI USA MÁS DE 20 LUCES

    if (cantidadLuces > 20) {
        obrasMasDe20Luces++;
    }

    // ACTUALIZACIÓN DE RESULTADOS

    const promedioConsumo = consumoDiarioTotal / totalObras;
    const porcentajeMas20 = (obrasMasDe20Luces / totalObras) * 100;

    txtCantidadObras.innerHTML = `<strong>Cantidad de obras subidas:</strong> ${totalObras}`;

    txtConsumoDiario.innerHTML = `<strong>Consumo diario total:</strong> ${Math.round(consumoDiarioTotal)} kWh <br>
    <strong>Consumo diario promedio por obra:</strong> ${Math.round(promedioConsumo)} kWh`;

    txtMayorTiempo.innerHTML = `<strong>Obra con mayor tiempo de funcionamiento:</strong> ${obraMayorTiempoNombre} (${maxTiempoFuncionamiento} horas) <br>
    <strong>Su costo diario es:</strong> $${Math.round(obraMayorTiempoCosto)}`;

    txtPorcentajeObras.innerHTML = `<strong>Porcentaje de obras con más de 20 luces:</strong> ${Math.round(porcentajeMas20)}%`;

    // HABILITAR BOTÓN DE REINICIO
    btnReset.disabled = false;

    // LIMPIAR CAMPOS DEL FORMULARIO
    formulario.reset();

    // BOTÓN DE REINICIO

    btnReset.addEventListener("click", () => {

        // RESETEAR VARIABLES GLOBALES
        totalObras = 0;
        consumoDiarioTotal = 0;
        obrasMasDe20Luces = 0;
        maxTiempoFuncionamiento = -1;
        obraMayorTiempoNombre = "";
        obraMayorTiempoCosto = 0;

        // LIMPIAR TEXTO
        txtCantidadObras.innerHTML = "";
        txtConsumoDiario.innerHTML = "";
        txtMayorTiempo.innerHTML = "";
        txtPorcentajeObras.innerHTML = "";


        // DESHABILITAR BOTÓN DE REINICIO
        btnReset.disabled = true;
    });
});