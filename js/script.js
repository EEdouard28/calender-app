
//Click event that takes input value and saves to local storage
$(".saveBtn").on("click",function(){
    var divKey = $(this).parent().attr("id")
    var textValue = $(this).siblings(".description").val()
    
    localStorage.setItem(divKey, textValue);
})

//Target places we want to put text value and make it persist & get from local storage
$(`#9 .description`).val(localStorage.getItem("9"));
$(`#10 .description`).val(localStorage.getItem("10"));
$(`#11 .description`).val(localStorage.getItem("11"));
$(`#12 .description`).val(localStorage.getItem("12"));
$(`#1 .description`).val(localStorage.getItem("1"));
$(`#2 .description`).val(localStorage.getItem("2"));
$(`#3 .description`).val(localStorage.getItem("3"));
$(`#4 .description`).val(localStorage.getItem("4"));
$(`#5 .description`).val(localStorage.getItem("5"));


//Time of day 
var currentTime = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentTime);

var currentHour = moment().hours()


//past present future
$(".time-block").each(function() {
    var divNumber = parseInt($(this).attr("id")); // Convert to number using parseInt()

    if (divNumber < currentHour) {
        $(this).addClass("past");
    } else if (divNumber === currentHour) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
})



