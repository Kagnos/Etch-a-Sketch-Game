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
let userGridSize;

gridSizeButton.addEventListener("click", (event) => {
    userGridSize = prompt("What size would you like the grid to be? (1-100)");

    if (userGridSize === null) {
        alert("Cancelled");
    } else if (userGridSize >= 1 && userGridSize <= 100) {
        gridContainer.innerHTML = "";
        const userGridItemSize = 1000 / userGridSize / 1000 * 100;
        for (i = 0; i < (userGridSize * userGridSize); i++) {
                gridItem.style.cssText = `height: ${userGridItemSize}%; width: ${userGridItemSize}%;`;
                gridContainer.appendChild(gridItem.cloneNode(true)); 
        }
    } else {
        alert("Please choose a grid size between 1 and 100");
    }
});

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", (event) => {
    if (userGridSize >= 1 && userGridSize <= 100) {
        gridContainer.innerHTML = "";
        for (i = 0; i < userGridSize * userGridSize; i++) {
        gridContainer.appendChild(gridItem.cloneNode(true));
    }} else {
        gridContainer.innerHTML = "";
        for (i = 0; i < 256; i++) {
        gridContainer.appendChild(gridItem.cloneNode(true));
    }
}});

const colorPicker = document.querySelector("#color-picker");

colorPicker.addEventListener("input", (event) => {
    event.target.value;
})

const colorButton = document.querySelector("#color-button");
const darkenButton = document.querySelector("#darken-button");
const lightenButton = document.querySelector("#lighten-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");

const gridItemActive = document.querySelector(".grid-item-active");

colorButton.addEventListener("click", (event) => {
    colorButton.classList.add("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");

    gridContainer.addEventListener("mouseover", (event) => {
        event.target.classList.add("grid-item-active");
    });
});

darkenButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.add("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");
});

lightenButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.add("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");
});

rainbowButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.add("button-active");
    eraserButton.classList.remove("button-active");
});

eraserButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.add("button-active");

    gridContainer.addEventListener("mouseover", (event) => {
        event.target.classList.remove("grid-item-active");
    });
});