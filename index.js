let h = 0, m = 0, s = 0, ms = 0;
let timer;
let display = document.querySelector(".timerfunction");
let laps = document.querySelector(".laps");

function start() {
  if(!timer){
    timer = setInterval(run, 20);
  }
}

function run() {
    ms++;
    display.innerHTML = (h < 10) ? "0" + h + ":" : h + ":";
    display.innerHTML += (m < 10) ? "0" + m + ":" : m + ":";
    display.innerHTML += (s < 10) ? "0" + s + ":" : s + ":";
    display.innerHTML += (ms < 10) ? "0" + ms : ms;
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }    
}

function pause() {
    clearInterval(timer);
    timer = false;
}

function reset(){
    h = 0;
    m = 0;
    s = 0;
    ms = 0;
    display.innerHTML = "00:00:00:00";
    laps.innerHTML = "";
    clearInterval(timer);
    timer = false;
}

function restart(){
 reset();
  start();
}

function lap(){
  let lap = document.createElement("li");
  lap.innerHTML = display.innerHTML;
  laps.appendChild(lap);
}

function resetLap(){
  laps.innerHTML = "";
  console.log("clear");
}