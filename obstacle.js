class Obstacle{
  static Obstacles = [];
  constructor(x,y,width,height){ //x,y x,y
    this.x = x
    this.y = y
    this.width = width;
    this.height = height;
    Obstacle.Obstacles.push(this)
  }

  drawMe(){
    drawRect(this.x,this.y,this.width,this.height, "#ADD8E6")
  }

  isPointInObstacle(x,y){
    var rx = this.x;
    var ry = this.y;

    var rright = this.x + this.width
    var rleft = this.x
    var rtop = this.y
    var rbottom = this.y + this.height

    if(x > rleft && x < rright && y > rtop && y < rbottom){
      console.log('t')
      return true
    }
    return false
  }


}
