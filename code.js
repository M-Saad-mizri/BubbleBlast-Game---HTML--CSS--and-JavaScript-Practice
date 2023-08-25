function makenewbbl() {
  var bbl = "";

  for (var i = 1; i <= 80; i++) {
    var r_number = Math.floor(Math.random() * 10);
    bbl += `<div class="bubble">${r_number}</div>`;
  }

  document.querySelector(".pnlbtm").innerHTML = bbl;
}

function rePlay(){
runTimmer();
randomNumberOnHit();
check();
makenewbbl();
}

function runTimmer() {
    var time = 60;
    var timeinterval = setInterval(function () {
      if (time > 0) {
        time--;
        document.querySelector("#timmer_counter").textContent = time;
      } else {
        clearInterval(timeinterval);
        document.getElementById("pnlbtm").innerHTML = `    <div style="display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;">
            <h1 style = "color: wheat;">You scored &nbsp; ${score}</h1>
            <button onclick="rePlay()" style="background-color: rgb(76, 165, 165); padding: 10px 30px; border: none; border-radius: 10px; font-size: 22px; color: wheat; margin-top: 20px;">Play Again</button>
        </div>`
      }
    }, 1000);
  }
  
var rN_OnHit;
var score = 0;
function randomNumberOnHit() {
  rN_OnHit = Math.floor(Math.random() * 10);
  document.querySelector("#hit_number").textContent = rN_OnHit;
}

function check() {
  document
    .querySelector(".pnlbtm")
    .addEventListener("click", function validate(data) {
      var clickednumber = Number(data.target.textContent);
      console.log(data.target);
      console.log(data.target.textContent);
      console.log(clickednumber);
      if (clickednumber == rN_OnHit) {
        score = score + 10;
        document.querySelector("#score").textContent = score;
        randomNumberOnHit();
        check();
        makenewbbl();
      }
    });
}

runTimmer();
randomNumberOnHit();
check();
makenewbbl();
