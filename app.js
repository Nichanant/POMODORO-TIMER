const btnStartEle = document.getElementById("start")
const btnStopEle = document.getElementById("stop")
const btnResetEle = document.getElementById("reset")
const timerEle = document.getElementById("time")

let interval
let timeLeft = 25*60; // 25 times * 60 seconds = 25 minutes

function updateTime(){
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60

    let min = (minutes<10)? "0"+minutes : minutes;
    let sec = (seconds<10)? "0"+seconds : seconds;

    let timeFormat =  `${min}:${sec}`

    timerEle.innerHTML = timeFormat;
}

function startTimer(){
    interval = setInterval(()=>{
        timeLeft--; // decrease value
        updateTime();

        if(timeLeft === 0){
            clearInterval(interval); // clear interval
            alert("Time's Up");
            timeLeft = 25*60; // back to start time value
            updateTime();
        }
    },1000)
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeLeft = 25*60;
    updateTime();
}


btnStartEle.addEventListener('click',startTimer)
btnStopEle.addEventListener('click',stopTimer)
btnResetEle.addEventListener('click',resetTimer)