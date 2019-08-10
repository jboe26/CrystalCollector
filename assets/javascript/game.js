
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
        rubyValue = (Math.floor(Math.random() * 11) + 1);
        diamondValue = (Math.floor(Math.random() * 11) + 1);
        yellowValue = (Math.floor(Math.random() * 11) + 1);
        greenValue = (Math.floor(Math.random() * 11) + 1);
        currentGoal = (Math.floor(Math.random() * 101) + 19);
        $("#goal").html(currentGoal);
        totalScore = 0;
        $("#totalScore").html(totalScore);
        

    }

    console.log(rubyValue)
    console.log(diamondValue)
    console.log(yellowValue)
    console.log(greenValue)


$(".crystal1").on("click", function(ev) {
totalScore = totalScore + rubyValue
$('#totalScore').text(totalScore);
if (totalScore === currentGoal) {
    wins++
    $("#wins").text(wins);
    $(".winorlose").html("You Won!");
    reset();
} if (totalScore > currentGoal) {
    losses++
    $("#losses").text(losses);
    $(".winorlose").html("You Lose!");
    reset(); 
}
});

$(".crystal2").on("click", function(ev) {
totalScore = totalScore + diamondValue
$('#totalScore').text(totalScore);
if (totalScore === currentGoal) {
    wins++
    $("#wins").text(wins);
    $(".winorlose").html("You Won!");
    reset();
} if (totalScore > currentGoal) {
    losses++
    $("#losses").text(losses);
    $(".winorlose").html("You Lose!");
    reset();
}
});

$(".crystal3").on("click", function(ev) {
totalScore = totalScore + yellowValue
$('#totalScore').text(totalScore);
if (totalScore === currentGoal) {
    wins++
    $("#wins").text(wins);
    $(".winorlose").html("You Won!");
    reset();
} if (totalScore > currentGoal) {
    losses++
    $("#losses").text(losses);
    $(".winorlose").html("You Lose!");
    reset();
}
});

$(".crystal4").on("click", function(ev) {
totalScore = totalScore + greenValue
$('#totalScore').text(totalScore);
if (totalScore === currentGoal) {
    wins++
    $("#wins").text(wins);
    $(".winorlose").html("You Won!");
    reset();
} if (totalScore > currentGoal) {
    losses++
    $("#losses").text(losses);
    $(".winorlose").html("You Lose!");
    reset();
}
});

});