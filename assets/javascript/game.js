
$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var totalScore = 0;

    var rubyValue = (Math.floor(Math.random() * 11) + 1);
    var diamondValue = (Math.floor(Math.random() * 11) + 1);
    var yellowValue = (Math.floor(Math.random() * 11) + 1);
    var greenValue = (Math.floor(Math.random() * 11) + 1);
    var currentGoal = (Math.floor(Math.random() * 101) + 19);
    $("#goal").html(currentGoal);
    $("#totalScore").html(totalScore);

    console.log(currentGoal);
    function reset() {
    }
    reset();

    rubyValue = (Math.floor(Math.random() * 11) + 1);
    diamondValue = (Math.floor(Math.random() * 11) + 1);
    yellowValue = (Math.floor(Math.random() * 11) + 1);
    greenValue = (Math.floor(Math.random() * 11) + 1);
    currentGoal = (Math.floor(Math.random() * 101) + 19);
    $("#goal").html(currentGoal);
    $("#totalScore").html(totalScore);

});

$(".crystal1").click() 
totalScore = totalScore + rubyValue
$('#totalScore').text(rubyValue);
if (totalScore === currentGoal) {
    wins++
    reset();
} else if (totalScore > currentGoal) {
    losses++
    reset();
}

$(".crystal2").click()
totalScore = totalScore + diamondValue
$('#totalScore').text(diamondValue);
if (totalScore === currentGoal) {
    wins++
    reset();
} else if (totalScore > currentGoal) {
    losses++
    reset();
}

$(".crystal3").click()
totalScore = totalScore + yellowValue
$('#totalScore').text(yellowValue);
if (totalScore === currentGoal) {
    wins++
    reset();
} else if (totalScore > currentGoal) {
    losses++
    reset();
}

$(".crystal4").click()
totalScore = totalScore + greenValue
$('#totalScore').text(greenValue);
if (totalScore === currentGoal) {
    wins++
    reset();
} else if (totalScore > currentGoal) {
    losses++
    reset();
}

function win() {
    wins++;
    $("#wins").text(wins);

    reset();
}


function losses() {
    losses++;
    $("#losses").text(losses);

    reset();
}