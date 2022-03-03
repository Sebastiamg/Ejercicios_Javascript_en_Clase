alert("Ingresa la edad de 20 personas, te diremos cuantas son mayores y cuantas son menores");

var mayores = 0;
var menores = 0;

for (let i = 1; i <= 20; i++) {
    
    let num = parseInt(prompt());

    if (num>18) {
        mayores = mayores + 1;
    } else {
        menores = menores +1;
    }

}

alert("Cantidad de personas mayores: "+mayores+"  Cantidad de personas menores: "+menores);


document.write("cantidad de personas mayores: ",mayores,'<br>');
document.write("cantidad de personas menores: ",menores);


