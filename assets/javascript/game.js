$( document ).ready(function() {
    
var wins = 0;
var losses = 0;
var totalScore = 0;

var rubyValue = (Math.floor(Math.random() * 11) + 1);
var diamonValue = (Math.floor(Math.random() * 11) + 1);
var yellowValue = (Math.floor(Math.random() * 11) + 1);
var greenValue = (Math.floor(Math.random() * 11) + 1);
var currentGoal = (Math.floor(Math.random() * 101) + 19);
$("#goal").html(currentGoal);
$("#totalScore").html(totalScore);

console.log(currentGoal);
function reset () {
}
    reset();

    var rubyValue = (Math.floor(Math.random() * 11) + 1);
    var diamonValue = (Math.floor(Math.random() * 11) + 1);
    var yellowValue = (Math.floor(Math.random() * 11) + 1);
    var greenValue = (Math.floor(Math.random() * 11) + 1);
    var currentGoal = (Math.floor(Math.random() * 101) + 19);
    $("#goal").html(currentGoal);
    $("#totalScore").html(totalScore);



});
