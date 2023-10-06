// --------------------------------------Modal--------------------------------------
let modal = document.querySelector(".modal");
let closeModal = document.querySelector(".close-modal");
closeModal.onclick = function () {
  modal.classList.add("hidden");
};
// --------------------------Check input fields are numbers--------------------------
let inputValues = document.querySelectorAll(".input-value");
for (let inputValue of inputValues) {
  inputValue.onkeyup = function (e) {
    let pressedField = e.target;
    let wrongMsg = pressedField.parentNode.nextSibling.nextSibling;
    let pressedFieldValue = pressedField.value;

    if (isNaN(pressedFieldValue)) {
      wrongMsg.classList.remove("hidden");
    } else {
      wrongMsg.classList.add("hidden");
    }
  };
}
// ---------------------Calculate after click calculate button---------------------
let calculateBtns = document.querySelectorAll(".calculate-btn");
for (let calculateBtn of calculateBtns) {
  calculateBtn.onclick = function (event) {
    // Get targeted figure
    let targetedFigure = event.target;
    let targetedFigureParent = targetedFigure.parentNode;

    // Get targeted figure name
    let targetedFigureName = targetedFigureParent.children[0].innerText;

    // Get targeted figures input fields
    let getInputContainer = targetedFigureParent.children[2];
    let getInputFields = getInputContainer.querySelectorAll(".input-value");

    // Get targetedFigure input values aloofly
    let firstInputAmount = getInputFields[0].value;
    let secondInputAmount = getInputFields[1].value;

    // if wrong input given then show modal
    if (!firstInputAmount || !secondInputAmount) {
      modal.classList.remove("hidden");
    } else {
      let result = calculate(
        targetedFigureName,
        firstInputAmount,
        secondInputAmount
      );
      // Display list to the area calculation
      displayCalculationList(targetedFigureName, result);
    }
  };
}
// -----------------------calculate formula and return formula-----------------------
function calculate(figure, firstField, secondField) {
  let formula;
  switch (figure) {
    case "Triangle":
      formula = 0.5 * firstField * secondField;
      break;
    case "Rectangle":
      formula = firstField * secondField;
      break;
    case "Parallelogram":
      formula = firstField * secondField;
      break;
    case "Rhombus":
      formula = 0.5 * firstField * secondField;
      break;
    case "Pentagon":
      formula = 0.5 * firstField * secondField;
      break;
    case "Ellipse":
      formula = Math.PI * firstField * secondField;
      break;

    default:
      break;
  }
  return formula;
}
// -----------------Display calculation to area calculation-----------------
const calculatedList = document.querySelector(".calculated-list");
let listItem = 0;
function displayCalculationList(figureName, result) {
  listItem += 1;
  let newLi = document.createElement("li");
  newLi.setAttribute("class", "calculated-item mb-3 flex justify-between");
  newLi.innerHTML = `
  <p>${listItem}. ${figureName}</p>
  <div><span>${result}</span>cm<sup>2</sup></div>
  <button class="convert-meter text-white bg-blue-400 rounded-md py-1 px-4">Convert to m<sup>2</sup></button>
  `;
  calculatedList.appendChild(newLi);
}
// Convert centimeter to meter
let calculatedLists = document.querySelector(".calculated-list");
calculatedLists.onclick = function (event) {
  if (event.target.innerText === "Convert to m2") {
    let targetedBtn = event.target;
    targetedBtn.innerText = "Converted";

    let getCentimeterItemParent = targetedBtn.parentNode;
    let getCentimeterItemDiv = getCentimeterItemParent.children[1];
    let getCentimeterItemValue = getCentimeterItemDiv.children[0].innerText;

    let convertedToMeter = getCentimeterItemValue / 100;

    displayConverted(getCentimeterItemDiv, convertedToMeter);
  }
};
// ------------Dispaly Converted data to Area Calculation------------
function displayConverted(getTargetToSet, converted) {
  getTargetToSet.innerHTML = `
  <div><span>${converted}</span>m<sup>2</sup></div>
  `;
}
