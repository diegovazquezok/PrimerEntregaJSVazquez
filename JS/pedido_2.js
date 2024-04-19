const hacerPedidoButton = document.getElementById('hacerPedidoButton');
hacerPedidoButton.addEventListener('click', function(event) {
    event.preventDefault();

    // calcula la gaseosa al costo total
    const gaseosaSeleccionada = document.getElementById('gaseosa').value;

    // Precios de las gaseosas
    const preciosGaseosas = {
        coca: 1500,
        pepsi: 1400,
        sprite: 1300
    };

    // Obtener el resumen del pedido actual del localStorage
    let resumenPedido = JSON.parse(localStorage.getItem('resumenPedido'));

    // Verificar si hay un pedido previo
    if (resumenPedido) {
        const costoTotalPrevio = resumenPedido.costoTotal;
        const costoGaseosa = preciosGaseosas[gaseosaSeleccionada];
        const costoTotalActualizado = costoTotalPrevio + costoGaseosa;

        // agregar al resumen del pedido 
        resumenPedido.gaseosa = gaseosaSeleccionada;
        resumenPedido.costoTotal = costoTotalActualizado;
    } else {
        // Si no hay un pedido anterior 
        resumenPedido = {
            gaseosa: gaseosaSeleccionada,
            costoTotal: preciosGaseosas[gaseosaSeleccionada]
        };
    }

    // Guardar el resumen del pedido 
    localStorage.setItem('resumenPedido', JSON.stringify(resumenPedido));

    // Mostrar una alerta con Sweet Alert para confirmar el pedido
    Swal.fire({
        title: 'Pedido realizado!',
        text: 'Tu pedido ha sido registrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Ok'
    }).then((result) => {
        // Redirigir a index.html después de hacer el pedido solo si se hizo clic en "Ok"
        if (result.isConfirmed) {
            window.location.href = "../index.html";
        }
    });
});
