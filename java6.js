
var descuento, total;

let pagar = parseInt(prompt("Ingrese el total a pagar"));

if (pagar<=100) {
    descuento = pagar * 0.02;
    total = pagar - descuento;
    alert("El descuento del 2% es: $"+descuento+" \nEl Total a pagar es: $"+total);
    document.write("El descuento del 2% es: $",descuento,'<br>');
} else {
    if (pagar>=100.01, pagar<=250) {
        descuento = pagar * 0.05;
        total = pagar - descuento;
        alert("El descuento del 5% es: $"+descuento+" \nEl Total a pagar es: $"+total);
        document.write("El descuento del 5% es: $",descuento,'<br>');
    } else {
        if (pagar>=250.01, pagar<=800) {
            descuento = pagar * 0.08;
            total = pagar - descuento;
            alert("El descuento del 8% es: $"+descuento+" \nEl Total a pagar es: $"+total);
            document.write("El descuento del 8% es: $",descuento,'<br>');
        } else {
            if (pagar>=800.01) {
                descuento = pagar * 0.12;
                total = pagar - descuento;
                alert("El descuento del 12% es: $"+descuento+" \nEl Total a pagar es: $"+total);
                document.write("El descuento del 12% es: $",descuento,'<br>');
            } else {
                
            }
        }
    }
}

document.write("Total a pagar: $",total);