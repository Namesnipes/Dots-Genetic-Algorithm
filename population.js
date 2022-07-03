class Population {
  static allDots = [];
  static checkpoint;
  static creativity = 0;

  constructor(){
    this.lowestFitness = 999999;
    this.failures = 0;
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
    var fitnessSum = 0;
    var percentChange = 0;
    var newLow = -1;

    for(var i = 0; i < Population.allDots.length; i++){
      var f = Population.allDots[i].getFitness()
      fitnessSum += f
      if(Math.abs(f) < this.lowestFitness){
        newLow = Math.abs(f)
      }
    }

    if(newLow === -1){
      this.failures += 1;
    } else {
      this.failures = 0;
      this.lowestFitness = newLow
    }
    if(this.failures >= 5 && this.lowestFitness > 10){
      Population.creativity = 1
    } else {
      Population.creativity = 0
    }

    this.lastFitnessSum = fitnessSum
    var newDots = [];
    newDots.push(Population.allDots[Math.floor(Population.allDots.length * Math.random())].getBaby())
    for(var i = 0; i < Population.allDots.length-1; i++){
      var fitness1 = Population.allDots[i].getFitness()
      var fitness2 = Population.allDots[i+1].getFitness()
      var betterDot;
      var worstDot;
      if(fitness1 > fitness2){
        betterDot = Population.allDots[i]
        worstDot = Population.allDots[i+1]
      } else if(fitness2 > fitness1){
        betterDot = Population.allDots[i+1]
        worstDot = Population.allDots[i]
      } else {
        betterDot = worstDot = Population.allDots[i]
      }
      if(Math.random() < Population.creativity){
        if(Math.random() < 0.50){
          newDots.push(worstDot.getBaby())
        } else {
          newDots.push(betterDot.getBaby())
        }
      } else {
        newDots.push(betterDot.getBaby())
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
