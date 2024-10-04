const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  //console.log(x, y);
  const spanEle = document.createElement("span");
  spanEle.style.left = `${x}px`;
  spanEle.style.top = `${y}px`;
  const size = Math.random() * 100;
  spanEle.style.width = `${size}px`;
  spanEle.style.height = `${size}px`;
  body.appendChild(spanEle);
  setTimeout(() => {
    spanEle.remove();
  }, 3000);
});
