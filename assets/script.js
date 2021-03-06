$(document).ready(function () {
    //variable to use moment for the whole script
    const today = moment();
    //Display current day using current day id
    $("#currentDay").text(today.format("dddd, MMMM Do"));
    //variable for current time from moment to change color of past present future
    let now = parseInt(moment().format('H'));
    console.log(now)


    //Variable for all inputs in each time box for local storage
    let $userInput9 = $("#userInput9");
    let $userInput10 = $("#userInput10");
    let $userInput11 = $("#userInput11");
    let $userInput12 = $("#userInput12");
    let $userInput1 = $("#userInput1");
    let $userInput2 = $("#userInput2");
    let $userInput3 = $("#userInput3");
    let $userInput4 = $("#userInput4");
    let $userInput5 = $("#userInput5");

    //color change function
    $("textarea").each(function () {
        for (let hour = 9; hour <= 17;hour++){
            if (hour < now) {
                $(this).css(".past");
            }
            if (hour > now) {
                $(this).css(".present");
            }
            if (hour === now) {
                $(this).css(".future");
            }
        }
        
    })
    //on click for save button to store info in local storage 
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

    //Saving user input in local storage even after refresh
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