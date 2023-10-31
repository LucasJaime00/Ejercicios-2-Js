while (true) {
    let numeroDNI = prompt("Ingrese su número de DNI (o presione 'cancelar' para salir):");

    if (numeroDNI === null) {
        break; // El usuario presionó 'cancelar', salimos del bucle
    }

    numeroDNI = parseInt(numeroDNI);

    if (!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999) {
        let letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
        let resto = numeroDNI % 23;
        let letra = letrasDNI.charAt(resto);

        alert("La letra de su DNI es: " + letra);
    } else {
        alert("Número de DNI no válido. Por favor, ingrese un número entre 0 y 99999999.");
    }
}