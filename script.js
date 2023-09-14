
let timerint
let timer;
let flag=0
let flag1
let nam
let name
let score

// Function to detect if the device is a mobile device
function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

// Check if the device is mobile and stop the game immediately
if (isMobileDevice()) {
  alert("Please open this game on a laptop or larger screen device.");
  document.querySelector("body").innerHTML =
    "<h1 id=mobile>Please open in laptop to play.Thank you!!</h1>";

  throw new Error("Game cannot run on mobile devices.");
} 

//If laptop them rum entire code
else {
  //Stop Game
  let start = document.querySelector("#str");
  start.addEventListener("click", function () {
    if (flag == 0) {
      game();
      document.querySelector("#pause").innerHTML = "Pause Game";
      document.querySelector("#str").innerText = "Stop Game";
      timer = 30;
      flag = 1;
    } 
    else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      document.querySelector("#str").innerText = "Start Game";
      nam=document.querySelector("#nam")
      nam.innerText = `Lets Play`;
      flag = 0;
    }
  });

  //Pause Game
  let pause = document.querySelector("#pause");
  pause.addEventListener("click", function () {
    if(flag===1 && timer!=0){
    if (flag1 === 0) {
      document.querySelector("#pause").innerText = "Resume";
      document.querySelector("#pbtm").innerHTML = `<h1>Game Paused</h1>`;
      flag1 = 1;
      clearInterval(timerint);
    } 
    else {
        runTimer();
        makeBubble();
        document.querySelector("#pause").innerText = "Pause";
        flag1 = 0;
    }
  }});
  function game() {  
    nam=document.querySelector("#nam")
    nam.innerText = `Hi ${name}`;
     flag1 = 0;
     name = prompt("What's your name?","Guest");
     if(name==null) {
        game()
     }
    timer = 30;
    score = 0;
    let hitrn = 0;
    function increasescore() {
      score += 10;
      document.querySelector("#score").textContent = score;
    }
    function hitvalue() {
      hitrn = Math.floor(Math.random() * 10);
      document.querySelector("#hit").textContent = hitrn;
    }
    document.querySelector("#pbtm").addEventListener("click", function (detail) {
        let clickednumber = Number(detail.target.textContent);
        if (hitrn === clickednumber) increasescore();
        if(!flag1){
        makeBubble();
        hitvalue();}
      }
      );
    makeBubble();
    hitvalue();
    runTimer();
  }
  function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 112; i++) {
      var rn = Math.floor(Math.random() * 10);
      clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
  }
  function runTimer() {
  nam=document.querySelector("#nam")
  nam.innerText = `Hi ${name}`;
    if(!timer)
      return;
    timerint = setInterval(function () {
     if (timer > 0) {
       timer--;
       document.querySelector("#timerval").textContent = timer;
     } else {
       clearInterval(timerint);
       nam=document.querySelector("#nam")
       nam.innerText = `Lets Play`;
       document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      document.querySelector("#str").innerText = "Start Game";
      flag=0
     }
   }, 1000);
 }
}
