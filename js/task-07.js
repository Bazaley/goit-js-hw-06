const fontSizeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRef.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}

// ------------------------------------------

// function onFontSizeControlInput() {
//   textRef.style.fontSize = this.value + "px";
// }
