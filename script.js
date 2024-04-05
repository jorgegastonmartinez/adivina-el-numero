document.addEventListener("DOMContentLoaded", function() {
    iniciarJuego();
});

let numeroEntrada = document.getElementById("numeroEntrada");
let mensaje = document.getElementById("mensaje");
let intento = document.getElementById("intento");
let btn = document.getElementById("boton")
let subtitulo = document.getElementById("subtitulo")

let intentos = 0;
let numeroAzar = Math.floor(Math.random() * 50 + 1);

function iniciarJuego() {
    intentos = 0;
    numeroAzar = Math.floor(Math.random() * 50 + 1);
    intento.textContent = "Cantidad de intentos: " + intentos;
    numeroEntrada.value = "";
    mensaje.textContent = "";
    numeroEntrada.style.display = "block";
    btn.style.display = "block";
    subtitulo.style.display = "block";
}

function chequearResultado() {
    intentos++
    intento.textContent = "Cantidad de intentos: " + intentos;

    let numeroIngresado = parseInt(numeroEntrada.value)

    if (numeroIngresado < 1 || numeroIngresado > 50 || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor introduce un número válido entre el 0 y el 50"
        mensaje.style.color = "red"
        return;
    }

    if (numeroIngresado == numeroAzar) {
        mensaje.textContent = "Felicitaciones 🙌 Número adivinado!!!"
        
        mensaje.style.color = "green"

        numeroEntrada.style.display = "none";

        btn.style.display = "none";

        subtitulo.style.display = "none";

        setTimeout(iniciarJuego, 5000);
        return;
    }

    if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "💡 Prueba con un número mas alto"
        mensaje.style.color = "red"

    } else {
        mensaje.textContent = "💡 Prueba con un número mas bajo"
        mensaje.style.color = "red"
    }
}

numeroEntrada.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        chequearResultado();
    }
})