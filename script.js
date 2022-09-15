//added current day at the top of the planner (moment)
var currentTime = moment().format("MMMM Do YYYY");
$("#currentDay").text(currentTime);


// 2. Clicking on the time is supposed to allow the note field to be editable
// 3. When note is entered, Save button pressed- item saved in local storage
// localStorage.setItem("9AM");
function seeIfSaving(event){
    if(event.target.className.includes("saveBtn")){
       // variables below - grandfather element to grandchild element)
       var row=event.target.closest(".row")
       var time=row.querySelector(".hour")
       var note=row.querySelector(".form-input")
       console.log(time.innerText.trim())
       console.log(note.value.trim())
       localStorage.setItem(time.innerText.trim(), note.value.trim())
    }
}
var page = document.getElementById("wholePage");
page.addEventListener("click", seeIfSaving)

// TODO: Make this not repeatedly done for the other hours
var textAtHour = localStorage.getItem("9AM")
if(textAtHour) {
    document.querySelector(".hour-note9").value = textAtHour
}
//below applied but does not save that line to storage
var textAtHour = localStorage.getItem("10AM")
if(textAtHour) {
    document.querySelector(".hour-note10").value = textAtHour
}

// function below saves form input on-click
function scheduleNote() {
    document.getElementById("saveBtn").addEventListener("click", "form-input");
}



// 1. Schedule appears already colour coded - depending on time of day - past, present or future
//var currentHour = moment().format("AH");
   // if(hours >= 9 && hours <= 17){
     //   $(".hour").addClass("present");
   // }
    //elseif(hours < 9) {
      //  $(".hour").addClass("past");
    //}
    //else{
      //  $(".hour").addClass("future");
    //}
