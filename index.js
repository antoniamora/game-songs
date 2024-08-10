const readline = require("readline");
const canciones = require("./canciones.json");
let cancionActual = elegirCancion();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});  

function preguntarUsuario() {
    rl.question('¿Cuál es el autor de esta canción de The Beatles: ' + cancionActual.nombre + "?\n" , (autor) => {
        if(cancionActual.autor === autor) {
            console.log("¡Acertaste!");
        } else {
            console.log("Fallaste. La respuesta correcta es " + cancionActual.autor + ".");
        }

        preguntarJugarDeNuevo();
    });    
}

function preguntarJugarDeNuevo() {
    rl.question('¿Quieres jugar de nuevo? (y/n)\n', (respuesta) => {
        if(respuesta === 'y') {
            actualizarCancionActual();
            preguntarUsuario();
        } else if(respuesta === 'n') {
            console.log("Gracias por jugar.")
            rl.close();
        } else {
            console.log("Debes ingresar una opción válida.");
            preguntarJugarDeNuevo();
        }
    })
}

function elegirCancion() {
    const indiceAleatorio = Math.floor(Math.random() * canciones.length);
    const cancionElegida = canciones[indiceAleatorio];
    return cancionElegida;
}

function actualizarCancionActual() {
    cancionActual = elegirCancion();
}

preguntarUsuario();