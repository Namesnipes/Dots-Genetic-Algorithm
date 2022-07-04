var myDot;
var pop = new Population();
var waitTimeMs = 10
var dotCount = 1000
var isFollowing = true

document.getElementById("game").addEventListener('click',function(e){
  var rect = e.target.getBoundingClientRect()
  var x = e.clientX - rect.left
  var y = e.clientY - rect.top;
  if(e.shiftKey){
    var width = 50;
    var length = 100;
    new Obstacle(x - width/2,y - length/2,width,length)
  } else {
    pop = new Population();
    pop.setCheckpoint(x,y)
  }
  pop.advanceStep()
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
  } else if(kc == 90){
    console.log(e)
  }
  pop.advanceStep()

})

document.addEventListener('mousemove', e => {
  return
  var rect = document.getElementById("game").getBoundingClientRect()
  var x = e.clientX - rect.left
  var y = e.clientY - rect.top;
  pop.setCheckpoint(x,y)
});

document.querySelector('input[name="runOrChase"]:checked').checked = false;
document.getElementById("chase").checked = true
document.addEventListener('input',(e)=>{
  if(e.target.getAttribute('name')=="runOrChase"){
    console.log(e.target.value)
    Dot.fitnessMultiplier = e.target.value
  }
})

document.getElementById("mutation").value = Dot.mutationRate
document.getElementById("mutation").addEventListener("change",function(e){
  Dot.mutationRate = e.target.value
})

document.getElementById("wait").value = waitTimeMs
document.getElementById("wait").addEventListener("change",function(e){
  waitTimeMs = e.target.value
})

async function wait(ms){
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function start(){
  new Obstacle(400,300,50,100)
  pop.setCheckpoint(400,400)
  pop.makeDots(dotCount)
  pop.advanceStep()
  while(true){
    await wait(waitTimeMs)
    pop.naturalSelection()
    pop.advanceStep()
    await wait(waitTimeMs)
    pop.mutateDots()
    pop.advanceStep()
  }
}

start()
