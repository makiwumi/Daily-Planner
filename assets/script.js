// Create moment variable to use date and time
const mo = moment();

//Display current date in jumbotron

$("#currentDay").text(mo.format("dddd, MMMM Do"));
console.log(mo.format("dddd, MMMM Do"));

// variables for on save button click 
// commented out for test in non-standard hours
let nowHour24 = moment().format('H');
let nowHour12 = moment().format('h');
let test = false;

// set times for tesitng after hours
if (test) {
    nowHour12 = 1;
}
console.log(test);

// Get stored todos from localStorage
  // Parsing the JSON string to an object
let storedPlans = JSON.parse(localStorage.getItem("storedPlans"));

if (test) { console.log(storedPlans); }

// If plans were retrieved from localStorage, update the plan array to it
if (storedPlans !== null) {
    planTextArr = storedPlans;
} else {
    // this should only occur on first time the app is loaded in the browser
    // helpfully remind user that lunch is important
    planTextArr = new Array(9);
}