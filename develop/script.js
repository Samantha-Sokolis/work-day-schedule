//add current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);