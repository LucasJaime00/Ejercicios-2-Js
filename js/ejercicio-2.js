let nota = parseFloat(prompt("Por favor, ingrese su nota (de 0 a 10):"));

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    let calificacion;

    if (nota >= 0 && nota <= 2) {
        calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota <= 4) {
        calificacion = "Insuficiente";
    } else if (nota >= 5 && nota <= 6) {
        calificacion = "Suficiente";
    } else if (nota == 7) {
        calificacion = "Bien";
    } else if (nota >= 8 && nota <= 9) {
        calificacion = "Notable";
    } else if (nota == 10) {
        calificacion = "Sobresaliente";
    }

    document.write("Su calificación es: " + calificacion);
} else if (isNaN(nota)) {
    document.write("Introduce un número válido.");
} else {
    document.write("Número erróneo");
}