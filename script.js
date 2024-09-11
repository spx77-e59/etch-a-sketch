const containerElement = document.querySelector(".container");
const btnElement = document.querySelector("button");

let sideLength = 16;
const GRIDSIZE = 800;

createGrid();

btnElement.addEventListener("click", () => {
  const temp = prompt("Enter a new grid size.");
  (temp === null || temp ==="") && window.location.reload();
  temp < 101 ? (sideLength = temp) : prompt("Enter a new grid size.");
  while (containerElement.firstChild) {
    containerElement.removeChild(containerElement.firstChild);
  }
  createGrid();
});

function createGrid() {
  for (let i = 0; i < sideLength; i++) {
    const rowElement = document.createElement("div");
    rowElement.classList = "row";
    for (let j = 0; j < sideLength; j++) {
      const itemElement = document.createElement("div");
      itemElement.classList = "item";
      rowElement.appendChild(itemElement);
      itemElement.style.flex = `0 0 ${GRIDSIZE / sideLength}px`;
    }
    containerElement.appendChild(rowElement);
    rowElement.style.flex = `0 0 ${GRIDSIZE / sideLength}px`;
  }
}

function randomColorSelector() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
}

containerElement.addEventListener("mouseover", (e) => {
  e.target.classList.contains("item") &&
    (e.target.style.background = randomColorSelector());
});

containerElement.addEventListener("mouseout", (e) => {
  e.target.classList.contains("item") && (e.target.style.background = "");
});
