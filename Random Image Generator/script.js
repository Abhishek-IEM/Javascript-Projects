const imgContainer = document.querySelector(".img-container");

const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("click", () => {
  imgNum = 6;
  upDateImg();
});

function upDateImg() {
  for (let i = 0; i < imgNum; i++) {
    const newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 1000)}`;
    imgContainer.appendChild(newImg);
  }
}
