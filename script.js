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
        alert("Cancelled");
    } else if (userGridSize >= 1 && userGridSize <= 100) {
        gridContainer.innerHTML = "";
        const userGridItemSize = 650 / userGridSize / 650 * 100;
        for (i = 0; i < (userGridSize * userGridSize); i++) {
                gridItem.style.cssText = `height: ${userGridItemSize}%; width: ${userGridItemSize}%;`;
                gridContainer.appendChild(gridItem.cloneNode(true)); 
        }
    } else {
        alert("Please choose a grid size between 1 and 100");
    }
});