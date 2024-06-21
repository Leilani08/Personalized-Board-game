let score1 = 0;
let showScore1 = document.getElementById('screen1');

let score2 = 0;
let showScore2 = document.getElementById('screen2');

let initialTimerDuration=5*60;
let timerDuration = initialTimerDuration;
let interval;
let isPaused = true;

let winner=document.getElementById('winner');

function add_Num() {
    score1 += 1;
    showScore1.innerHTML = score1;
}

function add_Num2() {
    score2 += 1;
    showScore2.innerHTML = score2;
}

function end_game() {
    pauseTimer();
    if (score1 > score2) {
        winner.innerText="THE WINNER:\nHome";
    } else if (score1 < score2) {
        winner.innerText="THE WINNER:\nGuest";
    } else {
        winner.innerText="LOS RESULTADOS:\nEs un empate";
    }
}

function updateTimer() {
    const timerElement = document.getElementById('screen_Timer');
    if (!timerElement) return;
    const minutes = Math.floor(timerDuration / 60);
    const seconds = timerDuration % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (interval) return;
    updateTimer();

    interval = setInterval(() => {
        timerDuration--;
        updateTimer();

        if (timerDuration <= 0) {
            clearInterval(interval);
            interval = null;
            alert('Time is up!');
        }
    }, 1000);
}


function pauseTimer() {
    clearInterval(interval);
    interval = null;
}

document.getElementById('timerControlBtn').addEventListener('click', function () {
    if (isPaused) {
        startTimer();
        this.textContent = 'Pause';
    } else {
        pauseTimer();
        this.textContent = 'Start';
    }
    isPaused = !isPaused;
});

document.addEventListener('DOMContentLoaded', () => {
    updateTimer();
});


function next_game() {
   
    score1 = 0;
    showScore1.innerHTML = 0;

    score2 = 0;
    showScore2.innerHTML = 0;

    timerDuration=initialTimerDuration;
    
    updateTimer();

    winner.innerText=" ";

}
