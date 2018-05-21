
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
    }
    }, 1000);
}

startTimer.window = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
};
var answers = ["a","b","c","d" ];
function submitAnswers() {
    var total = 4;
    var score = 0;
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
}
if (q1 == answers[0]){
    score ++;
}
if (q2 == answers[1]){
    score ++;
}
if (q3 == answers[2]){
    score ++;
}
if (q4 == answers[3]){
    score ++;
}
var results = document.getElementById("results");results.innerHTML;



