var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw(){
  //Variables de posición
  var x = canvas.width/2;
  var y = canvas.height-30;
  //Variables de movimiento
  var dx = 2;
  var dy = -2;
  //Dibujar pelota
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI*2);
  ctx.fillStyle = "#0fd0a7";
  ctx.fill();
  ctx.closePath();
  x += dx;
  y += dy;
}
setInterval(draw, 10);
//Dibujar cuadrado blanco en la esquina del canvas
/*
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#ffffff";
ctx.fill();
ctx.closePath();

//Dibujar círulo azul en el centro del canvas
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "#2d70e4";
ctx.fill();
ctx.closePath();

//Dibujar un recutangulo con los bordes pintados de verde con alpha en la parte superior del canvas
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 255, 0, 0.5)";
ctx.stroke();
ctx.closePath();
*/
