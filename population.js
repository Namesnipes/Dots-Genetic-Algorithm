class Population {
  static allDots = [];
  static checkpoint;

  constructor(){
  }

  makeDots(number){
    for(var i = 0; i < number; i++){
      var randX = Math.random() * canvas.width
      var randY = Math.random() * canvas.height
      var bad;
      for(var j = 0; j < Obstacle.Obstacles.length; j++){
        bad = Obstacle.Obstacles[j].isPointInObstacle(randX,randY)
        if(bad) break
      }
      if(bad){
        i--;
        continue
      }
      var d = new Dot(randX,randY,5)
      Population.allDots.push(d)
    }
  }

  setCheckpoint(x,y){
    Population.checkpoint = new Dot(x,y,5,"green")
  }

  advanceStep(){
    clearCanvas()
    if(Population.checkpoint) Population.checkpoint.drawMe()
    for(var i = 0; i < Obstacle.Obstacles.length; i++){
      Obstacle.Obstacles[i].drawMe()
    }
    for(var i = 0; i < Population.allDots.length; i++){
      Population.allDots[i].drawMe()
    }
  }

  naturalSelection(){
    var newDots = [];
    newDots.push(Population.allDots[Math.floor(Population.allDots.length * Math.random())].getBaby())
    for(var i = 0; i < Population.allDots.length-1; i++){
      var fitness1 = Population.allDots[i].getFitness()
      var fitness2 = Population.allDots[i+1].getFitness()
      if(fitness1 > fitness2){
        newDots.push(Population.allDots[i].getBaby())
      } else if(fitness2 > fitness1){
        newDots.push(Population.allDots[i+1].getBaby())
      } else {
        newDots.push(Population.allDots[i].getBaby())
      }
    }
    Population.allDots = newDots
  }

  mutateDots(){
    for(var i = 0; i < Population.allDots.length; i++){
      Population.allDots[i].mutateMe()
    }
  }

}
