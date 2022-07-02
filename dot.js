class Dot{
  static movementSpeed = 20;

  constructor(x,y,radius,color){
    this.x = x
    this.y = y;
    this.radius = radius
    this.color = color
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

  getFitness(){
    if(Population.checkpoint){
      return -Math.sqrt((this.x - Population.checkpoint.x)**2 + (this.y - Population.checkpoint.y)**2)
    } else {
      return 99999999
    }
  }

  getBaby(){
    return new Dot(this.x,this.y,this.radius,this.color || "black")
  }

  mutateMe(){
    var mutationRate = 0.3
    var diceRoll1 = Math.random()
    var diceRoll2 = Math.random()
    if(mutationRate > diceRoll1){
      this.setX(this.x + (Math.random() * 50) - 25)
    }
    if(mutationRate > diceRoll2){
      this.setY(this.y + (Math.random() * 50) - 25)
    }

  }

  drawMe(){
    drawDot(this.x,this.y,this.radius,this.color || "black")
  }

  move(dir){ //0: left, 1: up, 2:right, 3:down
    switch(dir){
      case 0:
        this.setX(this.x - Dot.movementSpeed);
        break;
      case 1:
        this.setY(this.y - Dot.movementSpeed);
        break;
      case 2:
        this.setX(this.x + Dot.movementSpeed);
        break;
      case 3:
        this.setY(this.y + Dot.movementSpeed);
        break;
    }

  }
}
