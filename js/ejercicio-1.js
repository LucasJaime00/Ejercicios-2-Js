let edad = prompt("Por favor, ingrese su edad:");

        edad = parseInt(edad);

        if (!isNaN(edad)) {
            if (edad >= 18) {
                document.write("Ya tiene edad para conducir");
            } else {
                document.write("Usted es menor de 18 años y no puede conducir.");
            }
        } else {
            document.write("La edad ingresada no es un número válido.");
        }