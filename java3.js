	var suma;
	var n = new Number();
	var prom = new Number();
	var x = new Number();
	n = 1;
	x = 0;
	suma = 0;
	prom = 0;

	alert("Ingresa notas diferentes de 0 para promediarlas")
	while (n!=0) {
		n = Number(prompt());
		if (n!=0) {
			suma = suma+n;
			x = x+1;
			prom = suma/x;
		}
	}
	if (x==0) {
		document.write("El primedio de las notas es: ",0,'<BR/>');
	} else {
		document.write("El promedio de las notas es: ",prom,'<BR/>');
	}
