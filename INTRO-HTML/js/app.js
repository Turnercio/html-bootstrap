function hola() {
    //referencia a la etiqueta de titulo por id
    titulo = document.getElementById("txtTitulo");
    //cambio de color de la etiqueta de titulo
    titulo.innerText = "Esto es Javascript"
    titulo.style.color = "#45f473";

    dato = document.getElementById("txtDato").value;
    titulo.innerText = dato;
}
console.log("esto es javascript")
