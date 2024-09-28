const coinIcon = document.getElementById("coin");
const tossBtn = document.getElementById("toss");
const result = document.getElementById("result");
coinIcon.insertAdjacentElement("afterend", result);
tossBtn.addEventListener("click", () => {
  tossBtn.disable = true;
  tossCoinFunction();
});

function tossCoinFunction() {
  const randomVal = Math.random();
  const faceCoin = randomVal < 0.5 ? "Heads" : "Tails";
  const imageUrl =
    faceCoin === "Heads" ? "./Images/head.png" : "./Images/tail.png";

  coinIcon.classList.add("flip");

  setTimeout(() => {
    coinIcon.innerHTML = `<img src = "${imageUrl}" alt="${faceCoin}">`;
    coinIcon.classList.remove("flip");
    setTimeout(() => {
      result.textContent = `Result ${faceCoin}`;
      result.style.opacity = 1;
      tossBtn.disabled = false;
    }, 500);
  }, 1000);
}
