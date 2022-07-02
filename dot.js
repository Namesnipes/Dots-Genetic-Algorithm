var myDot = null;

document.getElementById("game").addEventListener('click',function(e){
  var rect = e.target.getBoundingClientRect()
  var x = e.clientX - rect.left
  var y = e.clientY - rect.top;
  let d = new Dot(x,y,5)
  myDot = d;
  d.drawMe()
})

document.addEventListener("keydown",function(e){
  var kc = e.keyCode
  if(kc==65){
    myDot.move(0)
  } else if(kc == 87){
    myDot.move(1)
  } else if(kc == 68){
    myDot.move(2)
  } else if(kc == 83){
    myDot.move(3)
  } else if(kc == 81){
    myDot.setRadius(myDot.radius+1)
  } else if(kc == 69){
    myDot.setRadius(myDot.radius-1)
  }
  clearCanvas()
  myDot.drawMe()

})

class Dot{
  constructor(x,y,radius){
    this.x = x
    this.y = y;
    this.radius = radius
  }
  setX(x){
    this.x = Math.max(0+this.radius, Math.min(x, canvas.width-this.radius));
  }
  setY(y){
    this.y = Math.max(0+this.radius, Math.min(y, canvas.width-this.radius));
  }
  setRadius(r){
    this.radius = Math.max(1, Math.min(r, canvas.width/2));
    this.setX(this.x)
    this.setY(this.y)
  }
  drawMe(){
    drawDot(this.x,this.y,this.radius)
  }
  move(dir){ //0: left, 1: up, 2:right, 3:down
    switch(dir){
      case 0:
        this.setX(this.x - 5);
        break;
      case 1:
        this.setY(this.y - 5);
        break;
      case 2:
        this.setX(this.x + 5);
        break;
      case 3:
        this.setY(this.y + 5);
        break;
    }

  }
}
