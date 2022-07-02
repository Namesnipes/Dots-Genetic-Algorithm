var canvas = document.getElementById("game")
var context = canvas.getContext("2d");


function drawDot(x,y,radius,color='black'){
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fillStyle = color
  context.fill()
  context.stroke();
}

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
