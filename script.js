const gridItem = document.createElement("div");
const gridContainer = document.querySelector("#grid-container");
gridItem.textContent = "";
gridItem.classList.add("grid-item");

for (i = 0; i < 256; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
    console.log(i);
}
