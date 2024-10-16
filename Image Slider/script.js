let slides = document.querySelectorAll(".slide");
let count = 0;

slides.forEach(function (slides, index) {
  slides.style.left = `${index * 100}%`;
});

function Next() {
  count++;
  if (count == slides.length) {
    count = 0;
  }
  myFun();
}

function Prev() {
  count--;
  if (count == -1) {
    count = slides.length - 1;
  }
  myFun();
}

function myFun() {
  slides.forEach(function(slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });
}