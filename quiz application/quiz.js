window.onload = function () {
    var seconds = 0;
    var minute = 0;
    var interval;
    var start1 = document.getElementById("start");
    var sec = document.getElementById("sec");
    var min = document.getElementById("min");

    start1.addEventListener("click", () => {
      clearInterval(interval);
      interval = setInterval(startimer, 1000);
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
        sec.innerHTML = "0" + seconds ;
        minute = 0;
        min.innerHTML = "0" + minute;
      }
      if (seconds > 9) {
        sec.innerHTML = seconds;
      }
      

    }
    if (count<10) {
      seconds = "00";
      minute = "00";
      sec.innerHTML = seconds;
      min.innerHTML = minute;
    }
  };