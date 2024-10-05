setInterval(function () {
  let currentDateTime = new Date();

  let currDate = currentDateTime.getDate();

  let currMonth = currentDateTime.getMonth() + 1;

  let currYear = currentDateTime.getFullYear();

  document.getElementById("date").innerHTML =
    currDate + "/" + currMonth + "/" + currYear;

  let hours = currentDateTime.getHours();

  let min = currentDateTime.getMinutes();

  let sec = currentDateTime.getSeconds();

  let period = "AM";

  //conditions for AM and PM
  if (hours >= 12) {
    period = "PM";
  }

  //condition for 12 hour time
  if (hours > 12) {
    hours = hours - 12;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  let clock = hours + ":" + min + ":" + sec + period;

  document.getElementById("time").innerHTML = clock;
});
