

var countdownNumberEl = document.getElementById('countdown-number');
var countdown = 30;

countdownNumberEl.textContent = countdown;

setInterval(function () {
    countdown = --countdown <= 0 ? 30 : countdown;

    countdownNumberEl.textContent = countdown;
}, 1000);
