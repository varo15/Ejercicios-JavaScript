//creamos la variable canvas donde se dibujaran todos los elementos
var canvas = document.getElementById("myCanvas");
//creamos la herramienta para dibujar los elemtos
var ctx = canvas.getContext("2d");
//definimos X e Y para posicionar la bola
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

//definimos la paleta que movera el usuario
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

//definimos 2 variables de control para cuando el usuario pulse el teclado
var rightPressed = false;
var leftPressed = false;

//creamos una funcion que dibja la bola
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//Definimos la funcion con la que dibujaremos la paleta
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//creamos una funcion que ira dibujando y actualizandose cada 10 milisegundos
function draw() {

  //borramos el lienzo para pintar en uno vacio
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //llamamos a la funcion que dibuja la paleta
  drawPaddle();

  //llamamos a la funcion para dibujar la bola
  drawBall();

  //actualizamos las variables 'dx' y 'dy'
  x += dx;
  y += dy;

  //calculamos las colisiones de la pelota, teniendo en cuenta el radio 10 para que no desaparezca
  //media pelota al colisionar con los bo
  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  //en esta comprobacion, hacemos que el borde inferior no rebote y comprobamos si la pelota rebota dentro de los limites de la pala
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("GAME OVER");
      document.location.reload();
    }
  }
  
  //controlamos el movimiento de la paleta y sus colisiones
  if (rightPressed) {
    paddleX += 7;
  } else if (leftPressed) {
    paddleX -= 7;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

}


//Con estos listeners, obtenemos respuesta cuando las teclas se pulsan
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  }
}

setInterval(draw, 10); //intervalo de actualizacion de la funcion 'draw'
