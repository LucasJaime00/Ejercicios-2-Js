let fraseCompleta = "";

do{
    const primeraFrase = prompt("Ingrese una frase")
    if (fraseCompleta.length===0) {
        fraseCompleta += primeraFrase;
    }else{
        fraseCompleta += "-" + primeraFrase
    }
}while(confirm("¿Desea ingresar otra frase?"));

document.write(`<p>la frase completa es: ${fraseCompleta}</p>`)