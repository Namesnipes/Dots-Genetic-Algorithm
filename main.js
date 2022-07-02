var canvas = document.getElementById("game")
var context = canvas.getContext("2d");


function drawDot(x,y,radius){
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = 'black';
  context.fill()
  context.stroke();
}

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
