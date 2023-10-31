let suma = 0;

while (true) {
    let entrada = prompt("Ingrese un número (o presione 'cancelar' para salir):");

    if (entrada === null) {
        break; 
    }

    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("No valido solo se permite numeros");
    }
}

document.write("La suma total de los números introducidos es: " + suma);