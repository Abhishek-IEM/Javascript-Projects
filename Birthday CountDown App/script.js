let countDateTime = new Date("October 9, 2024 00:00:00").getTime();

let x = setInterval((funtion) => {
  let now = new Date().getTime();

  let diff = countDateTime - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    days + "DAYS | " + hours + "h : " + minutes + "m : " + seconds + "s ";

  if (diffrence < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Birthday Expire";
  }
});
