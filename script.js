var t = document.getElementById("startTimer");
var f = document.getElementById("fillTimer");
var ctx1 = t.getContext("2d");
var ctx2 = f.getContext("2d");
var sec, min, max;
var g, minute;
var original = 0;
var timerOn = true;
var current = 'setTime';
var color = '#8AC007';
var status = 'Session';
ctx1.font = "30px Open Sans";
ctx1.fillStyle = "white";
ctx1.textAlign = "center";
ctx1.fillText("Click to", 150, 120);
ctx1.fillText("start timer", 150,170);
ctx1.font = "40px Open Sans";

function Timer() {
    if (parseInt(document.getElementById(current).innerHTML) != original) {
        reset(current);
    }
    if (timerOn) {
        timerOn = false;
        g = setInterval(function () { drawCircle(), getTime() }, 1000);
    }
    else {
        clearInterval(g);
        timerOn = true;
    }
}

function getTime() {

    sec--;
    if (sec == -1) {
        sec = 59;
        minute--;
        if (minute < 10)
            minute = "0" + minute;
    }

    if (sec < 10)
        sec = "0" + sec;


    if (minute >= 0) {
        ctx1.clearRect(80, 100, 150, 90);
        ctx1.fillText(status, 150, 100);
        ctx1.fillText(minute + ":" + sec, 150, 170);
    }

    else {

        if (current == 'setTime') {
            reset('setBreak');
            color = "red";
            status = "Break";
            Timer();
        }
        else {
            reset('setTime');
            color = "#8AC007";
            status = "Session";
            Timer();
        }
    }

}

function drawCircle() {

    ang = parseInt(document.getElementById(current).innerHTML) * 60
    min = (min - (1 / ang));
    max = (max + (1 / ang));
    ctx2.beginPath();
    ctx2.arc(150, 150, 140, min * Math.PI, max * Math.PI);
    ctx2.fillStyle = color;
    ctx2.fill();

}

function reset(s) {
    clearInterval(g);
    ctx1.clearRect(0, 0, 290, 290);
    ctx2.clearRect(0, 0, 290, 290);
    current = s;
    min = 0.5;
    max = 0.5;
    sec = 60;
    timerOn = true;
    original = parseInt(document.getElementById(current).innerHTML);
    minute = original - 1;
    if (minute < 10)
        minute = "0" + minute;

}

function increase(s) {
    var i = parseInt(document.getElementById(s).innerHTML);
    if (i < 60)
        document.getElementById(s).innerHTML = i + 1 + 'min';
}

function decrease(s) {
    var i = parseInt(document.getElementById(s).innerHTML);
    if (current == s)
        timerOn = true;
    if (i > 1)
        document.getElementById(s).innerHTML = i - 1 + 'min';
}


