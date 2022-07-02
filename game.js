var myDot;
var pop = new Population();
var waitTimeMs = 10

document.getElementById("game").addEventListener('click',function(e){
  if(e.shiftKey){
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top;
    pop.setCheckpoint(x,y)
  } else {
    var rect = e.target.getBoundingClientRect()
    var x = e.clientX - rect.left
    var y = e.clientY - rect.top;
    let d = new Dot(x,y,5)
    console.log(d.getFitness())
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
  var rect = document.getElementById("game").getBoundingClientRect()
  var x = e.clientX - rect.left
  var y = e.clientY - rect.top;
  pop.setCheckpoint(x,y)
});

async function wait(ms){
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function start(){
  pop.setCheckpoint(400,400)
  pop.makeDots(1000)
  pop.advanceStep()
  while(true){
    await wait(waitTimeMs)
    pop.naturalSelection()
    pop.advanceStep()
    await wait(waitTimeMs)
    pop.mutateDots()
    pop.advanceStep()
    console.log('hi')
  }
}

start()
