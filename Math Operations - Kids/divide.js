const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');

const audio = document.getElementById('myAudio');

var answer = 0;

function generateEquation() {
    var num1 = Math.floor(Math.random() * 20);
    var num2 = Math.floor(Math.random() * 20);
    var wrong1 = Math.floor(Math.random() * 20);
    var wrong2 = Math.floor(Math.random() * 20);
    var wrong3 = Math.floor(Math.random() * 20);
    var allAnswers = [];
    var switchAnswers = [];

    answer = num1 / num2;

    //Numbers displayed in operation
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, wrong1, wrong2, wrong3];

    for(i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1) [0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
    option4.innerHTML = switchAnswers[3];
}

option1.addEventListener("click", function() {
    if(option1.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
})

option2.addEventListener("click", function() {
    if(option2.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
})

option3.addEventListener("click", function() {
    if(option3.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
})

option4.addEventListener("click", function() {
    if(option4.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
})

generateEquation();

