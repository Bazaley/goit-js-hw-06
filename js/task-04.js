const refs = {
  btnDecrementRef: document.querySelector("[data-action='decrement']"),
  btnIncrementRef: document.querySelector("[data-action='increment']"),
  valueRef: document.querySelector("#value"),
};

refs.btnDecrementRef.addEventListener("click", onBtnDecrementClick);

refs.btnIncrementRef.addEventListener("click", onBtnIncrementClick);

let counterValue = 0;

function onBtnDecrementClick() {
  refs.valueRef.textContent = counterValue -= 1;
}

function onBtnIncrementClick() {
  refs.valueRef.textContent = counterValue += 1;
}
