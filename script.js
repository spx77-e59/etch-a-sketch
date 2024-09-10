const containerElement = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  const rowElement = document.createElement("div");
  rowElement.classList = "row";
  for (let j = 0; j < 16; j++) {
    const itemElement = document.createElement("div");
    // itemElement.textContent = `${i*16 + j}`
    itemElement.classList = "item";
    rowElement.appendChild(itemElement);
  }
  containerElement.appendChild(rowElement);
}
