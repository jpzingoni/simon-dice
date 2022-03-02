boton = document.querySelector(".start")
color = document.querySelectorAll(".color")
texto = document.querySelector("p")
let colorMostrado = [];
let coloresClickeados = [];

boton.onclick = function(){
    //colorMostrado.push(cambiaropacidad())
    resetearJuego()
    manejarRonda()
    bloquearJuegoUsuario()
    //resetearJuego()
    return colorMostrado
}

function resetearJuego(){
    colorMostrado = [];
    coloresClickeados = [];
}
function cambiaropacidad($color){
    $color.style.opacity = 1;
    setTimeout(() => {
        $color.style.opacity = 0.3;
    }, 800);
}

function colorAleatorio(){
    i = color[Math.floor(Math.random() * color.length)];
    return i;
}

function turnoDelUsuario(){
    let red = document.getElementById("red")
    let green = document.getElementById("green")
    let yellow = document.getElementById("yellow")
    let blue = document.getElementById("blue")
    texto.innerHTML = "Turno del usuario"
    red.onclick = function(){
        coloresClickeados.push(red)
        const $cuadroMaquina = colorMostrado[coloresClickeados.length - 1];
        if(red.id == $cuadroMaquina.id){
            if (coloresClickeados.length === colorMostrado.length) {
                setTimeout(manejarRonda, 1000);
                return cambiaropacidad(red)
              }
            return cambiaropacidad(red)
        }else{
            perder();
        }
    }
    green.onclick = function(){
        coloresClickeados.push(green)
        const $cuadroMaquina = colorMostrado[coloresClickeados.length - 1];
        if(green.id == $cuadroMaquina.id){
            if (coloresClickeados.length === colorMostrado.length) {
                setTimeout(manejarRonda, 1000);
                return cambiaropacidad(green)
              }
            return cambiaropacidad(green)
        }else{
            perder();
        }
    }
    yellow.onclick = function(){
        coloresClickeados.push(yellow)
        const $cuadroMaquina = colorMostrado[coloresClickeados.length - 1];
        if(yellow.id == $cuadroMaquina.id){
            if (coloresClickeados.length === colorMostrado.length) {
                setTimeout(manejarRonda, 1000);
                return cambiaropacidad(yellow)
              }
            return cambiaropacidad(yellow)
        }else{
            perder();
        }
    }
    blue.onclick = function(){
        coloresClickeados.push(blue)
        const $cuadroMaquina = colorMostrado[coloresClickeados.length - 1];
        if(blue.id == $cuadroMaquina.id){
            if (coloresClickeados.length === colorMostrado.length) {
                setTimeout(manejarRonda, 1000);
                return cambiaropacidad(blue)
              }
            return cambiaropacidad(blue)
        }else{
            perder();
        }
    }
}

function bloquearJuegoUsuario(){
        document.querySelectorAll('.color').forEach(function($cuadro) {
          $cuadro.onclick = function() {
          };
        });
}

function desbloquearJuegoUsuario(){
    activarClicks = document.querySelector("body")
    activarClicks.onclick = turnoDelUsuario()
    //boton.onclick = null;
}

function manejarRonda() {
    bloquearJuegoUsuario()
    let colorNuevo = colorAleatorio()
    colorMostrado.push(colorNuevo)

    const RETRASO_TURNO_JUGADOR = (colorMostrado.length + 1) * 1000;

    colorMostrado.forEach(function($cuadro, index) {
        const RETRASO_MS = (index + 1) * 1000;
        setTimeout(function() {
          cambiaropacidad($cuadro);
        }, RETRASO_MS);
      });
    
      setTimeout(function() {
        desbloquearJuegoUsuario();
      }, RETRASO_TURNO_JUGADOR);
      texto.innerHTML = "Turno de la maquina"
      coloresClickeados = []
}

function perder() {
    bloquearJuegoUsuario();
    colorMostrado = []
    alert("Perdiste tocá empezar, para volver a jugar")
    texto.innerHTML = "Presiona 'Empezar' para jugar"
}
//turnoDelUsuario()
