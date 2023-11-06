const originalArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let displayArray = [];

const matrixContainer = document.getElementById("matrix-container");
const matrixTable = document.getElementById("matrix");
const clearButton = document.getElementById("clear-button");

function initialBoard() {
  displayArray = [...originalArray];
  renderBoard();
}

function setRandomOrder() {
  const randomOrderArray = [...originalArray];
  for (let i = randomOrderArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomOrderArray[i], randomOrderArray[j]] = [randomOrderArray[j], randomOrderArray[i]];
  }
  displayArray = randomOrderArray;
  renderBoard();
}

function getItem() {
  if (displayArray.length > 0) {
    return displayArray.shift();
  }
  return null;
}

function setDisplayBoard(event) {
  if (event.target.tagName === "TD") {
    const rowIndex = event.target.parentElement.rowIndex;
    const cellIndex = event.target.cellIndex;
    const value = getItem();
    if (value !== null) {
      displayArray[3 * rowIndex + cellIndex] = value;
      renderBoard();
    }
  }
}

function renderBoard() {
  matrixTable.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement("td");
      cell.textContent = displayArray[3 * i + j];
      row.appendChild(cell);
    }
    matrixTable.appendChild(row);
  }
}

matrixTable.addEventListener("click", setDisplayBoard);

clearButton.addEventListener("click", initialBoard);

initialBoard();
