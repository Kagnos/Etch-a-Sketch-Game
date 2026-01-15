const gridItem = document.createElement("div");
const gridContainer = document.querySelector("#grid-container");
gridItem.textContent = "";
gridItem.classList.add("grid-item");

for (i = 0; i < 256; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
};

gridContainer.addEventListener("mouseover", (event) => {
    event.target.classList.add("grid-item-active");
});

const gridSizeButton = document.querySelector("#grid-size-button");

gridSizeButton.addEventListener("click", (event) => {
    userGridSize = prompt("What size would you like the grid to be? (1-100)");
    if (userGridSize === null) {
        alert("test: cancelled");
    } else if (userGridSize > 0 && userGridSize < 101) {
        alert("test: correct size");
    } else {
        alert("test: incorrect input");
    }
});