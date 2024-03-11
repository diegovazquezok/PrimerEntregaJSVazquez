// Variables para almacenar opciones y costos
let nombreCliente;
let tipoPan;
let tipoCarne;
const acompañamientos = [];
let costoTotal = 0;
let numeroPedido;

// almacenar los costos de los elementos
const costos = {
    pan: {
        blanco: 500,
        integral: 600,
        arabe: 800
    },
    carne: {
        pollo: 5000,
        ternera: 7000,
        pescado: 6000
    },
    acompañamientos: {
        queso: 800,
        lechuga: 400,
        tomate: 500,
        bacon: 800,
        cebolla: 400
    }
};

// Función para obtener la opción del usuario
function obtenerOpcion(mensaje, opciones) {
    let opcionSeleccionada;
    do {
        opcionSeleccionada = prompt(mensaje + ' (' + opciones.join(', ') + ')').toLowerCase();
    } while (!opciones.includes(opcionSeleccionada));
    return opcionSeleccionada;
}

// Función para calcular el costo total
function calcularCostoTotal() {
    costoTotal = 0;
    // Calcular costo del pan
    costoTotal += costos.pan[tipoPan];

    // Calcular costo de la carne
    costoTotal += costos.carne[tipoCarne];

    // Calcular costo de los acompañamientos usando forEach
    acompañamientos.forEach(acompañamiento => {
        costoTotal += costos.acompañamientos[acompañamiento];
    });

    // Aplicar descuento si el costo total supera cierto monto
    if (costoTotal > 10000) {
        costoTotal -= 1000; // Descuento de $1000
    } else {
        alert('No se aplicó descuento. El costo total no supera el monto necesario.');
    }
}

// Función para filtrar acompañamientos
function filtrarAcompañamientos(criterio) {
    return acompañamientos.filter(acompañamiento => acompañamiento.includes(criterio));
}

// Función principal
function armarSandwich() {
    // Solicitar información al usuario
    nombreCliente = prompt('Ingrese su nombre:');
    tipoPan = obtenerOpcion('Seleccione el tipo de pan', ['blanco', 'integral', 'arabe']);
    tipoCarne = obtenerOpcion('Seleccione el tipo de carne', ['pollo', 'ternera', 'pescado']);

    let deseaAcompañamiento = confirm('¿Desea algún acompañamiento?');
    while (deseaAcompañamiento) {
        const acompañamiento = obtenerOpcion('Seleccione un acompañamiento', ['queso', 'lechuga', 'tomate', 'bacon', 'cebolla']);
        acompañamientos.push(acompañamiento);
        deseaAcompañamiento = confirm('¿Desea agregar otro acompañamiento?');
    }

    // Usar length para obtener la cantidad de acompañamientos
    const cantidadAcompañamientos = acompañamientos.length;

    // Usar find para encontrar un acompañamiento específico
    const acompañamientoTomate = acompañamientos.find(acompañamiento => acompañamiento === 'bacon');

    // Calcular el costo total
    calcularCostoTotal();

    // Generar número de pedido aleatorio
    numeroPedido = Math.floor(Math.random() * 1000) + 1;

    // Mostrar el resumen del pedido
    alert('Resumen del pedido:\n\n' +
        'Cliente: ' + nombreCliente + '\n' +
        'Tipo de pan: ' + tipoPan + '\n' +
        'Tipo de carne: ' + tipoCarne + '\n' +
        'Acompañamientos: ' + acompañamientos.join(', ') + '\n' +
        'Cantidad de acompañamientos: ' + cantidadAcompañamientos + '\n' +
        'Acompañamiento tomate presente: ' + (acompañamientoTomate ? 'Sí' : 'No') + '\n' +
        'Costo total: $' + costoTotal.toFixed(2) + '\n' +
        'Número de pedido: #' + numeroPedido);
}

// Llamar a la función principal
armarSandwich();