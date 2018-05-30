var hombre = new Array("___\n", "   |\n", "   O\n", "  /", "|", "\\\n", "  /", " \\\n", "___")
var palabra
var libreriaPalabras = new Array("m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
  "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
  "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
  "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
  "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e")
var partes = 0
var colNueva = 0
var jugando


function ObtienePalabra() {
  //obtiene la palabra para jugar de forma pseudoaleatoria
  var indice = Math.round(Math.random() * 27)
  var cadena = new String(libreriaPalabras[indice])
  palabra = cadena.split(" ")
}


function DibujaHombre(visor, partes) {
  //dibuja el hombre ahorcado
  //partes indica el numero de partes a dibujar
  var dibujo = ""
  if (partes < 10)
    for (var x = 0; x < partes; x++) {
      dibujo += hombre[x]
    }
  visor.displayHombre.value = dibujo
}


function DibujaLetra(visor, letra) {
  //dibuja una letra de la palabra
  //posicion indica donde debe dibujar la letra
  var flag = false
  //indica si se encontro la letra
  //obtiene cadena actual
  var cadena = new String(visor.displayPalabra.value)
  //la separa en sus espacios
  var letrasCadena = cadena.split(" ")
  cadena = ""
  for (var x = 0; x < palabra.length; x++) {
    if (palabra[x] == letra) {
      cadena += letra + " "
      flag = true
    } else
      cadena += letrasCadena[x] + " "
  }
  visor.displayPalabra.value = cadena
  return flag
}


function NuevaLetra(visor, letra) {
  //añade letra lista de letras
  visor.displayLetras.value += letra + " "
  //comprueba si ha de pasar a la siguiente fila
  if (colNueva == 3) {
    visor.displayLetras.value += "\n"
    colNueva = 0
  } else
    colNueva++
}


function Juega(visor, letra) {
  //comprueba si esta jugando
  if (jugando) {
    //ciclo de jugada
    //1. añade letra a la lista
    NuevaLetra(visor, letra)
    //2. dibuja la letra y comprueba si acierto
    var acierto = DibujaLetra(visor, letra)
    //3. si no acierto, dibuja hombre
    if (!acierto)
      DibujaHombre(visor, ++partes)
    //4. comprueba si fin
    if (partes == 9)
      FinJuego(false)
    else if (CompruebaPalabra(visor))
      FinJuego(true)
  } else {
    alert('Pulsa Juego nuevo para comenzar\nuna partida nueva.')
  }
}

function IniciaJuego(visor) {
  //inicializa visor y variables globales
  jugando = true
  partes = 0
  colNueva = 0
  ObtienePalabra()
  DibujaHombre(visor, partes)
  visor.displayPalabra.value = ""
  for (var x = 0; x < palabra.length; x++)
    visor.displayPalabra.value += "_ "
  visor.displayLetras.value = ""
}

function CompruebaPalabra(visor) {
  //comprueba si se completo toda la palabra
  var fin = true
  //obtiene cadena actual
  var cadena = new String(visor.displayPalabra.value)
  //la separa en sus espacios
  var letrasCadena = cadena.split(" ")
  for (var x = 0; x < letrasCadena.length; x++)
    if (letrasCadena[x] == "_")
      fin = false
  return fin
}


function FinJuego(resultado) {
  //indica que si se ha perdido o ganado
  var solucion = ""
  jugando = false
  if (resultado) {
    document.visor.ganadas.value++
      alert("Acertaste !")
  } else {
    document.visor.perdidas.value++
      //construye la palabra solucion
      for (var x = 0; x < palabra.length; x++)
        solucion += palabra[x]
    alert("Has muerto !\n La palabra era: " + solucion)
  }
}

function empezar(){
  var us = document.getElementById('usuario').value;
  if(us == ""){
    alert('Tienes que introducir un nombre de usuario');
    document.getElementById("usuario").focus();
    return false;
  }
  else if(us.length >= 13 ){
    alert('El nombre es demasiado largo')
    document.getElementById("usuario").focus();
    return false
  }
  else{
  var usupper = us.toUpperCase();
  document.getElementById('tit2').style.color = "cyan";
  document.getElementById('tit').innerText = 'JUGADOR ACTUAL';
  document.getElementById('tit2').innerText = usupper;
  document.getElementById('pop').style.height = "0";
}
}
