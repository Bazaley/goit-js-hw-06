const validationInputRef = document.querySelector("#validation-input");

validationInputRef.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur(event) {
  const lengthString = Number(event.currentTarget.dataset.length);
  const enteredLength = event.currentTarget.value.length;

  if (lengthString === enteredLength) {
    validationInputRef.classList.replace("invalid", "valid");
  } else {
    validationInputRef.classList.add("invalid");
  }
}

// ====================( А можно вот так?)================================

// function onValidationInputBlur() {
//   if (Number(this.dataset.length) === this.value.length) {
//     this.classList.replace("invalid", "valid");
//   } else {
//     this.classList.add("invalid");
//   }
// }

// ====================( Или нет?)================================
