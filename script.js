let timerint
let timer;
let flag=0
let flag1
let nam
let name
let score
let nr
let nc
if(window.innerWidth <= 423) {
  nr = Math.floor((document.querySelector('#pbtm').clientWidth - 40 + 10)/(48 + 10));
  nc = Math.floor((document.querySelector('#pbtm').clientHeight -64 - 40 + 10)/(48 + 10)); 
}

else if(window.innerWidth >= 1300){
  nr = Math.floor((document.querySelector('#pbtm').clientWidth - 40 + 10)/(64 + 10));
  nc = Math.floor((document.querySelector('#pbtm').clientHeight -40 + 10)/(64 + 10));
}
else  {
  nr = Math.floor((document.querySelector('#pbtm').clientWidth - 40 + 10)/(57 + 10));
  nc = Math.floor((document.querySelector('#pbtm').clientHeight -40 + 10)/(57 + 10));
}
let tb = nr*nc;
// console.log((0.85*window.innerWidth));
// console.log((0.9*window.innerHeight -30-64));
// console.log(nr,nc,tb);

// Function to detect if the device is a mobile device
// function isMobileDevice() {
//   return (
//     typeof window.orientation !== "undefined" ||
//     navigator.userAgent.indexOf("IEMobile") !== -1
//   );
// }

// // Check if the device is mobile and stop the game immediately
// if (isMobileDevice()) {
//   alert("Please open this game on a laptop or larger screen device.");
//   document.querySelector("body").innerHTML =
//     "<h1 id=mobile>Please open in laptop to play.Thank you!!</h1>";

//   throw new Error("Game cannot run on mobile devices.");
// }

//If laptop them rum entire code

  //Stop Game
  let start = document.querySelector("#str");
  start.addEventListener("click", function () {
    if (flag == 0) {
      game();
      document.querySelector("#pause").innerHTML = "Pause Game";
      document.querySelector("#str").innerText = "Stop Game";
      window.scrollBy(0,75)
      timer = 31;
      flag = 1;
    }
    else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      document.querySelector("#str").innerText = "Start Game";
     
      // document.getElementById('pbtm').style.pointerEvents = 'none';
     

      nam=document.querySelector("#nam")
      nam.innerText = `Lets Play`;
      document.querySelector("#score").textContent = 0;
      flag = 0;
    }
  });

  //Pause Games
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
    document.querySelector("#score").textContent = 0;

    nam=document.querySelector("#nam")
    nam.innerText = `Hi ${name}`;
     flag1 = 0;

     do{
      name = prompt("What's your name?","Guest");
  }while(name == null || name == "" );

    //  name = prompt("What's your name?","Guest");
    //  if(name==null) {
    //     game()
    //  }
    timer = 31;
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
        let circle = detail.target;
        if (hitrn === clickednumber && circle.className=="bubble")
        {
          circle.style.animationName='rotate'
          circle.style.animationDuration='1s'
          circle.style.backgroundColor="green"

          increasescore();
          if(!flag1){
            setTimeout(() => {
              makeBubble();
              hitvalue();
            }, 300);
          }
        }
        else if(circle.className=="bubble"){
          circle.style.animationName='rotate'
          circle.style.animationDuration='1s'
          circle.style.backgroundColor="red"
        }
        // clickednumber.innerHTML.style.backgroundColor="red"

      }
      );
    makeBubble();
    hitvalue();
    runTimer();
  }
  function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= tb; i++) {
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
      if(start.innerText==="Start Game"){
        document.querySelector("#pbtm").addEventListener("click", e => {
          document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
          document.querySelector("#hit").textContent = 0;

        })
      }
      flag=0
     }
   }, 1000);
 }
 window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
