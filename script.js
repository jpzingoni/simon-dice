let $button = document.getElementById('start');
let $turno  = document.getElementById('turno');
let $empezar = document.getElementById('empezar');
let $colores = document.getElementsByClassName('color');
let $ronda = document.getElementById('ronda');
let contador = 1;
let colorSeleccionado = null;
let secuenciaMaquinaOriginal = []
let secuenciaJugador= []

$button.addEventListener("click", function(){
    $ronda.textContent = `Ronda: ${contador}`;
    // secuenciaMaquinaOriginal = [];
    // secuenciaJugador = [];
    $turno.classList.add("mostrar")
    $button.classList.add("ocultar");
    $empezar.classList.add("ocultar")
    setTimeout(function(){
        turnoMaquina()}, 1000)
})

turnoMaquina = () =>{
    $turno.textContent = "Turno de la maquina"
    anularClicks()
    sumarRonda()
    obtenerColorAleatorio()
    for(let i = 0; i < secuenciaMaquinaOriginal.length; i++){
        let duracion = 1000;
        setTimeout(function(){
            cambiarColorMaquina(secuenciaMaquinaOriginal[i])
        }, i*duracion)
        setTimeout(function(){
            turnoJugador()}, (((secuenciaMaquinaOriginal.length))*duracion))
    }
}

turnoJugador = () =>{
    habilitarClicks();
    cambiarTextos();
    poderElegirColor();
}

obtenerColorAleatorio = () =>{
    let posicionAleatoria = Math.round(Math.random() * ($colores.length -1));
    let colorAleatorio = $colores[posicionAleatoria];
    secuenciaMaquinaOriginal.push(colorAleatorio);
    return colorAleatorio
}

cambiarColorMaquina = (colorAleatorio) =>{
    colorAleatorio.classList.add("transicion");
    setTimeout(function(){
        colorAleatorio.classList.remove("transicion")},
        600);
    }

cambiarColorJugador = (colorAleatorio) =>{
    colorAleatorio.classList.add("transicion");
    setTimeout(function(){
        colorAleatorio.classList.remove("transicion")},
        350);
    }

agregarSecuenciaJugador = () =>{
    secuenciaJugador.push(colorSeleccionado);
    let cuadroACompararMaquina = secuenciaMaquinaOriginal[secuenciaJugador.length -1]
    if( colorSeleccionado.id != cuadroACompararMaquina.id){
        secuenciaJugador = []
        secuenciaMaquinaOriginal = []
        $button.classList.remove("ocultar")
        $turno.classList.remove("mostrar")
        $empezar.classList.remove("ocultar")
        contador = 1;
        $ronda.textContent = "Perdiste, vuelve a comenzar";
    }
    else if(secuenciaJugador.length === secuenciaMaquinaOriginal.length){
        secuenciaJugador = []
        setTimeout(function(){
        turnoMaquina()}, 1000);
    }
}


poderElegirColor = () =>{
    Array.from($colores).forEach(i => {
        i.onclick = function(){
            cambiarColorJugador(i)
            colorSeleccionado = i;
            agregarSecuenciaJugador();
        }
    })
}

anularClicks = () =>{
    Array.from($colores).forEach(i => {
        i.classList.add("anularClicks")}
    )}

habilitarClicks = () =>{
    Array.from($colores).forEach(i => {
        i.classList.remove("anularClicks")}
    )}

cambiarTextos = () =>{
    $turno.textContent = "Turno jugador"
}

sumarRonda = () =>{
    $ronda.textContent = `Ronda: ${contador}`;
    contador++;
    return contador
}
