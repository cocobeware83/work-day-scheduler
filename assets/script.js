//show current date and time in the header section
var todaysDate=moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(todaysDate);

//listener for archive button click 
$(".saveBtn").on("click", function () {
        
    //get values of the timeblock content and time then save to local storage
            var blockcontent = $(this).siblings(".description").val();
            var time = $(this).parent().attr("id");
                localStorage.setItem(time, blockcontent);
        })
        function getTime() {
            var currentTime = moment().hour();
        }



//set if else loops to check time and determine in it is past, present or future
//set function to grab info from local storage 