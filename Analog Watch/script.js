const hour = document.querySelector(".hr");
const minute = document.querySelector(".min");
const second = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();
  hr = date.getHours() * 30;           //1 hour = 30 deg
  min = date.getMinutes() * 6;         // 1 minute = 6 deg
  sec = date.getSeconds() * 6;         //1 second = 6 deg
  hour.style.transform = `rotateZ(${(hr) + min/12}deg)`
  minute.style.transform = `rotateZ(${min}deg)`
  second.style.transform = `rotateZ(${sec}deg)`
});
