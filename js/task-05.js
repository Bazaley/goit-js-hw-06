const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};

refs.nameInput.addEventListener("input", onNameInput);

function onNameInput(event) {
  !event.currentTarget.value
    ? (refs.nameOutput.textContent = "Anonymous")
    : (refs.nameOutput.textContent = event.currentTarget.value);
}

// function onNameInput() {
//   !this.value
//     ? (refs.nameOutput.textContent = "Anonymous")
//     : (refs.nameOutput.textContent = this.value);
// }
