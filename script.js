const gridItem = document.createElement("div");
const gridContainer = document.querySelector("#grid-container");
gridItem.textContent = "testing!!";

for (i = 0; i < 64; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
    console.log(i);
}
