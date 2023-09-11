// Function to detect if the device is a mobile device
let flag = 0;
let timerint

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
  let start = document.querySelector("#str");

  start.addEventListener("click", function () {
    console.log('Presed')
    if (flag == 0) {
      game();
      document.querySelector("#str").innerText = "Stop Game";
      flag = 1;
    } 
    else {

      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
      document.querySelector("#str").innerText = "Start Game";
      flag = 0;
    }
  });

  function game() {
     name = prompt("What's your name?");

    var timer = 30;
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

    function makeBubble() {
      let clutter = "";
      for (let i = 1; i <= 112; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
      }
      document.querySelector("#pbtm").innerHTML = clutter;
    }

    function runTimer() {
       timerint = setInterval(function () {
        if (timer > 0) {
          timer--;
          document.querySelector("#timerval").textContent = timer;
        } else {
          clearInterval(timerint);
          document.querySelector(
            "#pbtm"
          ).innerHTML = `<h1>  Game Over, ${name} your final Score was ${score}</h1>`;
          // document.querySelector("#pbtm").innerHTML="<h1>' ${name} Your final Score was ${score}'</h1>"
          // document.querySelector("#pbtm").innerHTML = `<h1>${name},your final Score was ${score}</h1>`;

          // alert(`${name} Your final Score was ${score}`)
        }
      }, 1000);
    }

    document
      .querySelector("#pbtm")
      .addEventListener("click", function (detail) {
        let clickednumber = Number(detail.target.textContent);
        if (hitrn === clickednumber) increasescore();
        makeBubble();
        hitvalue();
      });

    makeBubble();
    hitvalue();
    runTimer();
  }
}
