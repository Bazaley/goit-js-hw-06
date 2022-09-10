function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);

function onBtnCreateClick() {
  const count = refs.controls.firstElementChild.value;
  createBoxes(count);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function createBoxes(amount) {
  let num = 20;
  const elements = [];
  for (let i = 0; i < amount; i += 1) {
    num += 10;
    elements.push(
      `<div style='background-color:${getRandomHexColor()};
      width:${num + "px"};
      height:${num + "px"}; margin-bottom:10px;'></div>`
    );
  }

  refs.boxes.insertAdjacentHTML("beforeend", elements.join(""));
}

//============== Или вот так???============

// function createBoxes(amount) {
//   let num = 20;
//   const array = new Array(Number(amount));
//   const elements = [...array]
//     .map(() => {
//       num += 10;
//       return `<div style='background-color:${getRandomHexColor()};
//         width:${num + "px"};
//        height:${num + "px"}; margin-bottom:10px;'></div>`;
//     })
//     .join("");

//   refs.boxes.insertAdjacentHTML("beforeend", elements);
// }
