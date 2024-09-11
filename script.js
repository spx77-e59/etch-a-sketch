const containerElement = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const rowElement = document.createElement("div");
  rowElement.classList = "row";
  for (let j = 0; j < 16; j++) {
    const itemElement = document.createElement("div");
    itemElement.classList = "item";
    rowElement.appendChild(itemElement);
  }
  containerElement.appendChild(rowElement);
}

function randomColorSelector() {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`;
}

containerElement.addEventListener("mouseover", (e) => {
    e.target.classList.contains("item") && (e.target.style.background = randomColorSelector());
});
containerElement.addEventListener("mouseout", (e) => {
    e.target.classList.contains("item") && (e.target.style.background = "");
});
