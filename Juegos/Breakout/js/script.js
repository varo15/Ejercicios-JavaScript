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

//declaramos las variables necesarias para los ladrillos
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;

var bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    };
  }
}

// -------- FIN DECLARACION VARIABLES -------- //

//creamos una funcion que dibja la bola
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//creamos la funcion con la que dibujaremos la paleta
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

//creamos la funcion que dibuja los ladrillos
function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

//creamos una funcion que ira dibujando y actualizandose cada 10 milisegundos
function draw() {

  //borramos el lienzo para pintar en uno vacio
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //llamamos a la funcion que dibuja la paleta
  drawPaddle();

  //llamamos la funcion que detecta las colisiones entre la pelota y los ladrillos
  collisionDetection();

  //llamamos a la funcion para dibujar la bola
  drawBall();

  //Llamamos a la funcion para dibujar los ladrillos
  drawBricks();

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

//Declaramos la funcion con la que detectamos las colisiones de los ladrillos y la pelota
function collisionDetection() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
        }
      }
    }
  }
}

setInterval(draw, 10); //intervalo de actualizacion de la funcion 'draw'
