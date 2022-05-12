window.onload = function () {
  var seconds = 0;
  var minute = 0;
  var interval;
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var sec = document.getElementById("sec");
  var min = document.getElementById("min");
  var reset = document.getElementById("reset");

  start.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startimer, 1);
  });
  stop.addEventListener("click", () => {
    clearInterval(interval);
  });

  reset.addEventListener("click", () => {
    clearInterval(interval);
    seconds = "00";
    minute = "00";
    sec.innerHTML = seconds;
    min.innerHTML = minute;
  });
  function startimer() {
    minute++;
    if (minute <= 9) {
      min.innerHTML = "0" + minute;
    }
    if (minute > 9) {
      min.innerHTML = minute;
    }
    if (minute > 59) {
      seconds++;
      sec.innerHTML = "0" + seconds;
      minute = 0;
      min.innerHTML = "0" + minute;
    }
    if (seconds > 9) {
      sec.innerHTML = seconds;
    }
    
  }
};
