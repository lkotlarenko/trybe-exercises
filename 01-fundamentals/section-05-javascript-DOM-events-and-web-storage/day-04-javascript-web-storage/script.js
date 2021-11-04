const currentFont = document.getElementById("fontSize");
const textArea = document.querySelector("textarea");

function fontSize() {
  const inputSize = Number(currentFont.value);
  if (inputSize >= 5 && inputSize <= 30) {
    textArea.style.fontSize = inputSize + "px";
  } else {
    alert("Insira um valor entre 5 e 30 🤔");
  }
}

function inputEnter(event) {
  const inputSize = Number(currentFont.value);
  if (event.key === "Enter") {
    fontSize();
  }
}

currentFont.addEventListener("click", fontSize);
currentFont.addEventListener("keyup", inputEnter);

window.onload = function () {
  currentFont.value = 17;
  fontSize();
};
