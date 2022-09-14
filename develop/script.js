//added current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);


//Try this for text input: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_get

// var scheduleNoteEl = $('input[name="schedule-note"]');

// 1. Schedule appears already colour coded - depending on time of day - past, present or future

// 2. Clicking on the time is supposed to allow the note field to be editable

// 3. When note is entered, Save button pressed- item saved in local storage

// 4. Refresh page to ensure item has remained. 
