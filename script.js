const containerElement = document.querySelector(".container");
const btnElement = document.querySelector("button");

let sideLength = 16;
const GRIDSIZE = 800;

createGrid();

btnElement.addEventListener("click", () => {
  const temp = prompt("Enter a new grid size.");
  (temp === null || temp === "") && window.location.reload();
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
      itemElement.setAttribute("data-alpha", "0.1");
      rowElement.appendChild(itemElement);
      itemElement.style.flex = `0 0 ${GRIDSIZE / sideLength}px`;
    }
    containerElement.appendChild(rowElement);
    rowElement.style.flex = `0 0 ${GRIDSIZE / sideLength}px`;
  }
}

function randomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `${red},${green},${blue}`;
}

function mouseoverHandler(e) {
  if (e.target.classList.contains("item")) {

    let alpha = parseFloat(e.target.getAttribute("data-alpha"));
    e.target.style.background = `rgba(${randomRGB()}, ${alpha})`;

    if (!isNaN(alpha) && alpha < 1) {
      alpha = Math.min(alpha + 0.1, 1);
      e.target.style.opacity = alpha;
      e.target.setAttribute("data-alpha", alpha.toFixed(1));
    }
  }
}

containerElement.addEventListener("mouseover", mouseoverHandler);

// function mouseoutHandler(e) {
//     e.target.classList.contains("item") && (e.target.style.background = "");
// }

// containerElement.addEventListener("mouseout", mouseoutHandler);
