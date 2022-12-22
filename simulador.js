const comprarProductos = () => {

    // variables
    let producto = "";
    let precio = 0;
    let cantidad = 0;
    let seguirComprando = false;
    let precioTotal = 0;

    do {
        producto = prompt("¿Te gustaria comprar glitter, facestickers ?", "Ej: ambos");
        cantidad = parseInt(prompt("¿Cuántos queres comprar?"));

        // parametros
        const cantidadValidada = validarCantidad(cantidad);
        console.log(cantidadValidada);

        // flujo de compra
        switch (producto) {
            case 'glitter':
                precio = 550;
                break;
            case " facestickers":
                precio = 600;
                break;
            case "ambos":
                precio = 1150;
                break;
            default:
                alert("Algun dato ingresado es incorrecto");
                precio = 0;
                cantidad = 0;
        }
        precioTotal += precio * cantidadValidada;


        seguirComprando = confirm("¿Querés agregar otro producto?");

    } while (seguirComprando);

    console.log(calcularPromo(precioTotal));
}



//validaciones

const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Deber agregar un número.')
        } else {
            alert('Debe agregar un número distinto de cero.')
        }
        cantidad = parseInt(prompt("¿Cuántos querés comprar?"));
    }
    return cantidad;

};


// promo 50% desc cuando se compra mayor a $8000
const calcularPromo = (precioTotal) => {

    if (precioTotal >= 8000){
    return precioTotal*0.5;
} 
    return precioTotal;
};




comprarProductos();


