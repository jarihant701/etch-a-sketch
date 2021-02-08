const size = document.getElementById("size");
const sliderValue = document.getElementById("sliderValue");
const button = document.getElementById("changeSize");
const gridContainer = document.getElementById("grid-container");
const grid = document.getElementById("grid");

const color = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

var click = false;

addGridElements(16); //Creating a grid when page is loaded
changeColor(); //Calling Hover Function on Page Load

function createGrid() {
  let gridSize = size.value;
  clearGrid();
  addGridElements(gridSize);
  changeColor();
}

function clearGrid() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    gridContainer.removeChild(element);
  });
}

function addGridElements(gridsize) {
  gridContainer.style.gridTemplateColumns = `repeat(${gridsize},1fr)`;
  for (let i = 1; i <= gridsize * gridsize; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    gridContainer.appendChild(gridCell);
  }
}

function changeColor() {
  const gridArray = Array.from(gridContainer.childNodes);
  gridArray.forEach((element) => {
    element.addEventListener("click", togglePen);
  });
}

function togglePen() {
    const gridArray = Array.from(gridContainer.childNodes);
    if(!click) {
        gridArray.forEach((element) => {
            element.addEventListener("mouseleave", activatePen);
      })
      click = true;
    } else {
        gridArray.forEach((element) => {
        element.removeEventListener("mouseleave", activatePen);
      })
      click = false;
    }
  }

  function activatePen(element) {
        let randomcolor = Math.floor(Math.random() * 7);
        element.target.style.backgroundColor = `${color[randomcolor]}`;
    }

size.oninput = function () {
  sliderValue.textContent = this.value;
};
