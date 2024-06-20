
    var ms = document.getElementById("milisec");
    var sec = document.getElementById("seconds");
    var min = document.getElementById("minutes");
    var hr = document.getElementById("hours");
    var redDot = document.getElementById("red-dot");



    var start = document.getElementById("start");
    var stop1 = document.getElementById("stop");
    var reset = document.getElementById("reset");

    var interval;
    var seconds = 0;
    var milliseconds = 0;
    var minutes = 0
    var hours = 0;
    var dotInterval;

    function updateStopwatch() {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            }


        const millisecondsStr = milliseconds < 10 ? '0' + milliseconds : milliseconds;
        const secondsStr = seconds < 10 ? '0' + seconds : seconds;
        const minutesStr = minutes < 10 ? '0' + minutes : minutes;
        const hoursStr = hours < 10 ? '0' + hours : hours;

        ms.innerHTML = millisecondsStr;
        hr.innerHTML = hoursStr;
        min.innerHTML = minutesStr;
        sec.innerHTML = secondsStr;
      }

    start.addEventListener("click", ()=>{
        if(!interval){
            interval = setInterval(updateStopwatch, 10);
            if(!dotInterval){
            dotInterval = setInterval(() => {
                redDot.classList.toggle('hidden');
            }, 50);
        }
        }
        
      });

    stop1.addEventListener("click", ()=>{
            clearInterval(interval);
            interval = null;
            
    });

    reset.addEventListener("click", ()=>{
        
            clearInterval(interval);
            clearInterval(dotInterval); 
            interval = null;
            dotInterval = null;
            milliseconds=0;
            seconds = 0;
            minutes = 0;
            hours = 0;
            ms.innerHTML = "00";
            hr.innerHTML = "00";
            min.innerHTML = "00";
            sec.innerHTML = "00";
            redDot.classList.remove('hidden');
            
    });

