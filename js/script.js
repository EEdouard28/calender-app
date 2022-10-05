// Dependencies
// Data
// Functions
// User Interactions
// Initialization
//Click event that takes input value and saves to local storage
$(".saveBtn").on("click",function(){
    var divKey = $(this).parent().attr("id")
    var textValue = $(this).siblings(".description").val()
    
    localStorage.setItem(divKey, textValue)
})

//Target places we want to put text value and make it persist & get from local storage
$(`#0900 .description`).val(localStorage.getItem("9"))


//Time of day 
var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);

var currentHour = moment().hours()
//past present future
$(".time-block").each(function() {
    var divNumber = $(this).attr("id")
    if (divNumber < currentHour) {
        $(this).addClass("past")
    }
    if (divNumber === currentHour) {
        $(this).addClass("present")
    }
    if (divNumber > currentHour) {
        $(this).addClass("future")
    }
}) 

