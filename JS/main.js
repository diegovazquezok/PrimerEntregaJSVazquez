// Función para cargar el resumen del pedido en el index.html
function cargarResumenPedido() {
    const resumenPedido = JSON.parse(localStorage.getItem('resumenPedido'));
    if (resumenPedido) {
        // Calcular costo total sumando lo de página 1 y página 2
        const costoTotal = resumenPedido.costoTotal;
        const resumenPedidoHTML = `
            <h2>Resumen del Pedido</h2>
            <p>Cliente: ${resumenPedido.nombreCliente}</p>
            <p>Tipo de Pan: ${resumenPedido.tipoPan}</p>
            <p>Tipo de Carne: ${resumenPedido.tipoCarne}</p>
            <p>Acompañamientos: ${resumenPedido.acompañamientos.join(', ')}</p>
            ${resumenPedido.gaseosa ? `<p>Gaseosa: ${resumenPedido.gaseosa}</p>` : ''}
            <p>Costo Total: $${costoTotal.toFixed(2)}</p>
            <p>Número de Pedido: #${resumenPedido.numeroPedido}</p>
        `;
        const resumenPedidoDiv = document.getElementById('resumenPedido');
        resumenPedidoDiv.innerHTML = resumenPedidoHTML;

        // Actualizar el costo total
        const calculadora = document.getElementById('totalPrecio');
        calculadora.innerText = `$${costoTotal.toFixed(2)}`;
    }
}

// Trae el resumen del pedido
cargarResumenPedido();

// Botón para agregar papas
const agregarPapasButton = document.getElementById('agregarPapas');
agregarPapasButton.addEventListener('click', function() {
    // Sumar $1500 al total del pedido
    const calculadora = document.getElementById('totalPrecio');
    const costoActual = parseFloat(calculadora.innerText.substring(1)); 
    const nuevoCosto = costoActual + 1500;
    calculadora.innerText = `$${nuevoCosto.toFixed(2)}`;

    // Agregar papas al resumen
    const resumenPedidoDiv = document.getElementById('resumenPedido');
    const resumenPedidoHTML = resumenPedidoDiv.innerHTML;
    const nuevoResumenPedidoHTML = resumenPedidoHTML + '<p>Papas agregadas</p>';
    resumenPedidoDiv.innerHTML = nuevoResumenPedidoHTML;
});

// Botón para confirmar el pedido
const confirmarPedidoButton = document.getElementById('confirmarPedido');
confirmarPedidoButton.addEventListener('click', function() {
    // Redirigir al index.html
    window.location.href = "../index.html";
});

