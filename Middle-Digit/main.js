let input = document.getElementById("input");
let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");
let errorParagraph = document.getElementById("errorParagraph");
let array = [];

button.onclick = clickHandler;

function clickHandler() {
  let inputValue = input.value;

  try {
    if (
      isNaN(Number(inputValue)) ||
      inputValue.length % 2 === 0 ||
      inputValue.length < 3
    ) {
      throw alert("Enter the number");
    }

    let x = inputValue[Math.floor(inputValue.length / 2)];

    array.push(parseInt(x));

    paragraph.innerText = "[" + array.join(",") + "]";
    errorParagraph.innerText = "";
    let sum = array.reduce((a, b) => a + b, 0);

    if (sum > 52) {
      errorParagraph.innerText += "\n Number cannot be entered.";
      button.disabled = true;
    }
  } catch (error) {
    errorParagraph.innerText = error.message;
  }
}
