//show current date and time in the header section
var todaysDate=moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").html(todaysDate);
    $(document).ready(function () {

//listener for archive button click 
$(".saveBtn").on("click", function () {
        
//get values of the timeblock content and time then save to local storage
var blockcontent = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");
    localStorage.setItem(time, blockcontent);})
      function getTime() {
            
//define variable for if else loops
$(".time-block").each(function () {
    var rowTime = parseInt($(this).attr("id").split("hour")[1]);

//set if else loops to call state of time in each row and color coding for state of task
if (rowTime < currentTime) {
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
}
else if (rowTime === currentTime) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
}
else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}})}


getTime();})



