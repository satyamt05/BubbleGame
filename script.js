// Function to detect if the device is a mobile device

let timerint
let timer;
let flag=0
let flag1

let name
let score
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
} else {

  //stop
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
      
      // document.querySelector("#str").innerText = "Start Game";

      flag = 0;
      // console.log(Object.getPrototypeOf(game).runTimer())
      // testClass.test();
    }
  });

  //pause
  let pause = document.querySelector("#pause");

  pause.addEventListener("click", function () {
    if(flag===1 && timer!=0){
    // console.log('Presed')
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
        
      
      // document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      // document.querySelector("#pause").innerText = "Resume";
      // flag1 = 0;
     
    }
  }});

  



  function game() {  
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

    

    document
      .querySelector("#pbtm")
      .addEventListener("click", function (detail) {
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
    if(!timer)
      return;
    // console.log("called")
    timerint = setInterval(function () {
     if (timer > 0) {
       timer--;
       document.querySelector("#timerval").textContent = timer;
     } else {
       clearInterval(timerint);
       document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      document.querySelector("#str").innerText = "Start Game";
      flag=0

       // document.querySelector("#pbtm").innerHTML="<h1>' ${name} Your final Score was ${score}'</h1>"
       // document.querySelector("#pbtm").innerHTML = `<h1>${name},your final Score was ${score}</h1>`;

       // alert(`${name} Your final Score was ${score}`)
     }
   }, 1000);
 }
}
