var timer = 30;
var score = 0;
let hitrn=0
function increasescore(){
  score+=10
  document.querySelector("#score").textContent=score
}


function hitvalue(){
   hitrn=Math.floor(Math.random()*10)

 document.querySelector("#hit").textContent=hitrn
}

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 119; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
 var timerint = setInterval(function () {
   if (timer > 0) {
     timer--;
    document.querySelector ("#timerval").textContent = timer;
          
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML="<h1>Game Over</h1>"
    }
  }, 1000)};

document.querySelector("#pbtm").addEventListener("click",function(detail){
 let clickednumber=Number(detail.target.textContent)
 if(hitrn===clickednumber)
increasescore()
makeBubble()
hitvalue()


  
})



makeBubble();
hitvalue()
runTimer()
