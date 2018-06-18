//creamos la variable canvas donde se dibujaran todos los elementos
var canvas = document.getElementById("myCanvas");
//creamos la herramienta para dibujar los elemtos
var ctx = canvas.getContext("2d");
//definimos X e Y para posicionar la bola
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 3;
var dy = -3;
var ballRadius = 10;

//definimos la paleta que movera el usuario
var paddleHeight = 15;
var paddleWidth = 100;
var paddleX = (canvas.width - paddleWidth) / 2;

//definimos 2 variables de control para cuando el usuario pulse el teclado
var rightPressed = false;
var leftPressed = false;

//declaramos las variables necesarias para los ladrillos
var brickRowCount = 3;
var brickColumnCount = 9;
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

<<<<<<< HEAD

=======
var name = document.getElementById('name').value;
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
//declaramos la variable para el contador de puntos
var score = 0;

//declaramos la variable que cuenta las vidas dandole un valor inicial
var lives = 3;

//declaramos variables de audio
var pop = document.getElementById('brickAudio');
var mario = document.getElementById('mario');
var nigga = document.getElementById('nigga');
<<<<<<< HEAD
var win = document.getElementById('win');
var mainAudio = document.getElementById('mainAudio');
=======
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
// -------- FIN DECLARACION VARIABLES -------- //




//creamos una funcion que dibja la bola
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "red";
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
        ctx.fillStyle = "#186f35";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}



//creamos una funcion que ira dibujando y actualizandose cada 10 milisegundos
function draw() {
<<<<<<< HEAD
  var name = document.getElementById('name').value;

=======
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
  //borramos el lienzo para pintar en uno vacio
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //llamamos a la funcion que dibuja la paleta
  drawPaddle();

  //llamamos a la funcion que dibuja la puntuacion
  //drawScore();
  document.getElementById('score').innerHTML = 'Score: ' + score;

  //llamamos a la funcion que dibuja las vidas
  //drawLives();
  document.getElementById('lives').innerHTML = 'Lives: ' + lives;

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
      lives--;
      if (!lives) {
        //alert("GAME OVER");
        //document.location.reload();
<<<<<<< HEAD
        mainAudio.pause();
        nigga.play();
        swal({
          title: name + " you are a looser!",
          icon: "error",
          button: "Try again"
        }).then(function(){
   location.reload();
   }
);
=======
        nigga.play();
        swal({
          title: name + " you ar a looser!",
          icon: "error",
          button: "Exit",
        });
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
        draw.break();
      } else {
        x = canvas.width / 2;
        y = canvas.height - 30;
        dx = 3;
        dy = -3;
        paddleX = (canvas.width - paddleWidth) / 2;
      }
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
  requestAnimationFrame(draw);
} //FIN function draw

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
  var name = document.getElementById('name').value;
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      var b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          pop.play();
          if (score == brickRowCount * brickColumnCount) {
            // alert("Que bueno que ganaste");
            // document.location.reload();
            mainAudio.pause();
            win.play();
            swal({
              title: "Good job " + name + "!",
              icon: "success",
              button: "Nice",
            });
<<<<<<< HEAD

=======
            win.play();
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
            draw.break();

          }
        }
      }
    }
  }
}


function launchGame() {
  var name = document.getElementById('name').value;
  //controlamos un posible error
  //dejar el nombre en blanco
  if (name.length == 0) {
    //ponemos visible la equiqueta de error
    document.getElementById('errorLabel').style.visibility = 'visible';
  } else {
<<<<<<< HEAD

    mario.play();
    document.getElementById('errorLabel').style.visibility = 'hidden';
=======
    mario.play();
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
    document.getElementById('landing').style.visibility = 'hidden';
    document.getElementById('title').style.visibility = 'visible';
    document.getElementById('myCanvas').style.visibility = 'visible';


<<<<<<< HEAD
    //aplicamos un delay de 4 segundos antes de mepezar el juego
=======
    //aplicamos un delay de 1 segundos antes de mepezar el juego
>>>>>>> c930b4ff57b2ef09ff18c7bf911d6a25671d21c1
    setTimeout(function() {
      draw()

    }, 4000);
  }
} //FIN funcion launchGame
