var descuento, total;

alert("Tipo A 10% de descuento\nTipo B 15% de descuento\nTipo C 20% de descuento")

let precio = parseInt(prompt("Ingrese el precio del producto"));
document.write("Ingrese el precio del producto: ");
document.write(precio,'<br>');

let categoria = prompt("Seleccione su categoria: A   -   B   -   C");
document.write("Seleccione su categoria:  A   -   B   -   C  =   ");
document.write(categoria,"<br>")

switch (categoria) {
    case "A": case "a":
        descuento = precio * 0.1;   
        total = precio - descuento;
        alert("El total del Producto más el descuento es: $"+total);
        document.write("El total del Producto más el descuento es: ",total);
        break;

        case "B": case "b":
        descuento = precio * 0.15;
        total = precio - descuento;
        alert("El total del Producto más el descuento es: $"+total);
        document.write("El total del Producto más el descuento es: ",total);
        break;

        case "C": case "c":
        descuento = precio * 0.2;
        total = precio - descuento;
        alert("El total del Producto más el descuento es: $"+total);
        document.write("El total del Producto más el descuento es: ",total);
        break;

    default:
        alert("La categoria ingresada es INCORRECTA");
        document.write("La categoria ingresada es INCORRECTA");
        break;
}





