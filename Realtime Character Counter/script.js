const textArea = document.getElementById("textarea");
const totalChar = document.getElementById("totalChar");
const remainChar = document.getElementById("remChar");

textArea.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalChar.innerText = textArea.value.length;
  remainChar.innerHTML = textArea.getAttribute("maxLength") - textArea.value.length;
}
