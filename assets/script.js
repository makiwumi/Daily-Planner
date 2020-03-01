$(document).ready(function () {
    //variable to use moment for the whole script
    const today = moment();
    //Display current day using current day id
    $("#currentDay").text(today.format("dddd, MMMM Do"));
    //variable for current time from moment to change color of past present future
    var now = parseInt(moment().format('H'));
    console.log(now)


    //Variable for all inputs in each time box for local storage
    var $userInput9 = $("#userInput9");
    var $userInput10 = $("#userInput10");
    var $userInput11 = $("#userInput11");
    var $userInput12 = $("#userInput12");
    var $userInput1 = $("#userInput1");
    var $userInput2 = $("#userInput2");
    var $userInput3 = $("#userInput3");
    var $userInput4 = $("#userInput4");
    var $userInput5 = $("#userInput5");


    $("textarea").each(function () {
        for (let hour = 9; hour <= 17;hour++){
            if (hour < now) {
                $(this).addClass("bg-gray");
            }
            if (hour > now) {
                $(this).addClass("bg-green")
            }
            if (hour === now) {
                $(this).addClass("bg-red")
            }
        }
        
    })

    $("button").on("click", function () {

        //setting items in the local storage
        localStorage.setItem("9AM", ($userInput9.val()))
        localStorage.setItem("10AM", ($userInput10.val()))
        localStorage.setItem("11AM", ($userInput11.val()))
        localStorage.setItem("12AM", ($userInput12.val()))
        localStorage.setItem("1PM", ($userInput1.val()))
        localStorage.setItem("2PM", ($userInput2.val()))
        localStorage.setItem("3PM", ($userInput3.val()))
        localStorage.setItem("4PM", ($userInput4.val()))
        localStorage.setItem("5PM", ($userInput5.val()))

    })

    //getting the content stored and sending to the screen. When page is refreshed content will stay
    $("#userInput9").append(localStorage.getItem("9AM"));
    $("#userInput10").append(localStorage.getItem("10AM"));
    $("#userInput11").append(localStorage.getItem("11AM"));
    $("#userInput12").append(localStorage.getItem("12AM"));
    $("#userInput1").append(localStorage.getItem("1PM"));
    $("#userInput2").append(localStorage.getItem("2PM"));
    $("#userInput3").append(localStorage.getItem("3PM"));
    $("#userInput4").append(localStorage.getItem("4PM"));
    $("#userInput5").append(localStorage.getItem("5PM"));

})