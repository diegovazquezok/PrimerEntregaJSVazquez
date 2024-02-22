// Variables para almacenar opciones y costos
let nombreCliente;
let tipoPan;
let tipoCarne;
const acompañamientos = [];
let costoTotal = 0;
let numeroPedido;

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
    switch (tipoPan) {
        case 'blanco':
            costoTotal += 500;
            break;
        case 'integral':
            costoTotal += 600;
            break;
        case 'arabe':
            costoTotal += 800;
            break;
        default:
            break;
    }

    // Calcular costo de la carne
    switch (tipoCarne) {
        case 'pollo':
            costoTotal += 5000;
            break;
        case 'ternera':
            costoTotal += 7000;
            break;
        case 'pescado':
            costoTotal += 6000;
            break;
        default:
            break;
    }

    // Calcular costo de los acompañamientos
    for (let i = 0; i < acompañamientos.length; i++) {
        switch (acompañamientos[i]) {
            case 'queso':
                costoTotal += 800;
                break;
            case 'lechuga':
                costoTotal += 400;
                break;
            case 'tomate':
                costoTotal += 500;
                break;
            case 'bacon':
                costoTotal += 800;
                break;
            case 'cebolla':
                costoTotal += 400;
                break;
            default:
                break;
        }
    }

    // Aplicar descuento si el costo total supera cierto monto
    if (costoTotal > 10000) {
        costoTotal -= 1000; // Descuento de $1000
    } else {
        alert('No se aplicó descuento. El costo total no supera el monto necesario.');
    }
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
        'Costo total: $' + costoTotal.toFixed(2) + '\n' +
        'Número de pedido: #' + numeroPedido);
}

// Llamar a la función principal
armarSandwich();