let numero = parseInt(prompt("Ingrese un número para la pirámide (no mayor de 50):"));

// Verificar si el número es válido
if (!isNaN(numero) && numero >= 1 && numero <= 50) {
    for (let i = numero; i >= 1; i--) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        document.write(linea);
    }
} else {
    document.write("Número no válido. Por favor, ingrese un número entre 1 y 50.");
}