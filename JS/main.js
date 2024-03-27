//DOM
const formulario = document.getElementById('formularioPedido');
const resumenPedidoDiv = document.getElementById('resumenPedido');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // DOM en el formulario
    const nombreCliente = document.getElementById('nombreCliente').value;
    const tipoPan = document.getElementById('tipoPan').value;
    const tipoCarne = document.getElementById('tipoCarne').value;
    const checkboxes = document.querySelectorAll('input[name="acompañamiento"]:checked');
    const acompañamientos = [];
    checkboxes.forEach(function(checkbox) {
        acompañamientos.push(checkbox.value);
    });

    let costoTotal = 0;
    let numeroPedido;
    let contadorPedidos = 1;

    // Precios de alimentos
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

    // Numero de pedido (comienzan en el 1001)
    function obtenerNumeroPedidoReal() {
        const numeroPedidoReal = 1000 + contadorPedidos; 
        contadorPedidos++; 
        return numeroPedidoReal;
    }

    // Precio Total
    function calcularCostoTotal() {
        costoTotal = 0;

        costoTotal += costos.pan[tipoPan];
        costoTotal += costos.carne[tipoCarne];
        acompañamientos.forEach(acompañamiento => {
            costoTotal += costos.acompañamientos[acompañamiento];
        });

        // Aplicar descuento si el precio total supera cierto monto
        if (costoTotal > 10000) {
            costoTotal -= 1000; // Descuento de $1000
        }
    }

    calcularCostoTotal();

    // Generar número de pedido
    numeroPedido = obtenerNumeroPedidoReal();

    // resumen del pedido
    const resumenPedidoHTML = `
        <h2>Resumen del Pedido</h2>
        <p>Cliente: ${nombreCliente}</p>
        <p>Tipo de Pan: ${tipoPan}</p>
        <p>Tipo de Carne: ${tipoCarne}</p>
        <p>Acompañamientos: ${acompañamientos.join(', ')}</p>
        <p>Costo Total: $${costoTotal.toFixed(2)}</p>
        <p>Número de Pedido: #${numeroPedido}</p>
    `;

    // Insertar el resumen del pedido en el div resumenPedidoDiv
    resumenPedidoDiv.innerHTML = resumenPedidoHTML;

    // Guardar el resumen del pedido en localStorage
    localStorage.setItem('resumenPedido', JSON.stringify({
        nombreCliente: nombreCliente,
        tipoPan: tipoPan,
        tipoCarne: tipoCarne,
        acompañamientos: acompañamientos,
        costoTotal: costoTotal,
        numeroPedido: numeroPedido
    }));

    // Guardar el resumen del pedido en sessionStorage
    sessionStorage.setItem('resumenPedido', JSON.stringify({
        nombreCliente: nombreCliente,
        tipoPan: tipoPan,
        tipoCarne: tipoCarne,
        acompañamientos: acompañamientos,
        costoTotal: costoTotal,
        numeroPedido: numeroPedido
    }));
});