const days = document.getElementById("Day");
const hours = document.getElementById("Hour");
const mins = document.getElementById("Min");
const secs = document.getElementById("Sec");

const countDate = "1 Jan 2021";

const title = document.getElementById("title")
const details = document.getElementById("details")
const btnunlocked = document.getElementById("btn")

function CountDown() {
    const _countDate = new Date(countDate);
    const currentDate = new Date();
    if (_countDate > currentDate) {
        const totalSec = (_countDate - currentDate) / 1000;
        const _days = Math.floor(totalSec / 3600 / 24);
        const _hours = Math.floor(totalSec / 3600) % 24;
        const _mins = Math.floor(totalSec / 60) % 60;
        const _secs = Math.floor(totalSec) % 60;

        days.innerHTML = formatTime(_days);
        hours.innerHTML = formatTime(_hours);
        mins.innerHTML = formatTime(_mins);
        secs.innerHTML = formatTime(_secs);
    }
    else {
        title.innerText = "Yayy, Clap clap."
        details.innerText = "It's finally done and the wait is over.";
    }
}

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

CountDown();
setInterval(CountDown, 1000);

function copyToClipBoard() {
    var textArea = document.createElement("textarea");
    textArea.value = "https://github.com/Keumjoh/countdown-timer";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}