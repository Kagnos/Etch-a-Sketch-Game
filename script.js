const gridItem = document.createElement("div");
const gridContainer = document.querySelector("#grid-container");
gridItem.textContent = "";
gridItem.classList.add("grid-item");

const colorPicker = document.querySelector("#color-picker");

// Starting values

for (i = 0; i < 256; i++) {
    gridContainer.appendChild(gridItem.cloneNode(true));
};

gridContainer.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = colorPicker.value;
    event.target.style.backgroundColor = colorPicker.value;
});

// Buttons

// Grid size button

// Buttons

// Grid size button

const gridSizeButton = document.querySelector("#grid-size-button");
let userGridSize;

gridSizeButton.addEventListener("click", (event) => {
    userGridSize = prompt("What size would you like the grid to be? (1-100)");

    if (userGridSize >= 1 && userGridSize <= 100) {
        gridContainer.innerHTML = "";
        const userGridItemSize = 1000 / userGridSize / 1000 * 100;
        for (i = 0; i < (userGridSize * userGridSize); i++) {
                gridItem.style.cssText = `height: ${userGridItemSize}%; width: ${userGridItemSize}%;`;
                gridContainer.appendChild(gridItem.cloneNode(true)); 
    }} else {
        do {
            userGridSize = prompt("Please choose a grid size between 1 and 100");
        }
        while ((!userGridSize >= 1 && userGridSize <= 100))
            gridContainer.innerHTML = "";
            const userGridItemSize = 1000 / userGridSize / 1000 * 100;
            for (i = 0; i < (userGridSize * userGridSize); i++) {
                gridItem.style.cssText = `height: ${userGridItemSize}%; width: ${userGridItemSize}%;`;
                gridContainer.appendChild(gridItem.cloneNode(true)); 
            }
}});

// Reset button

const resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", (event) => {
    if (userGridSize === undefined) { 
        gridContainer.innerHTML = "";
        for (i = 0; i < 256; i++) {
            gridContainer.appendChild(gridItem.cloneNode(true));
    }} else if (userGridSize >= 1 && userGridSize <= 100){
        gridContainer.innerHTML = "";
        for (i = 0; i < userGridSize * userGridSize; i++) {
            gridContainer.appendChild(gridItem.cloneNode(true));
        }
    } else if (userGridSize === "") {
        
    }
});

// Color button

const colorButton = document.querySelector("#color-button");
const darkenButton = document.querySelector("#darken-button");
const lightenButton = document.querySelector("#lighten-button");
const rainbowButton = document.querySelector("#rainbow-button");
const eraserButton = document.querySelector("#eraser-button");

colorButton.addEventListener("click", (event) => {
    colorButton.classList.add("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");

    gridContainer.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = colorPicker.value;
    });
});

// Darken button

darkenButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.add("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");
});

// Lighten button

lightenButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.add("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.remove("button-active");
});

// Rainbow button

rainbowButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.add("button-active");
    eraserButton.classList.remove("button-active");

    gridContainer.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)}, ${Math.floor(Math.random() * 257)})`
    });
});

// Eraser button

eraserButton.addEventListener("click", (event) => {
    colorButton.classList.remove("button-active");
    darkenButton.classList.remove("button-active");
    lightenButton.classList.remove("button-active");
    rainbowButton.classList.remove("button-active");
    eraserButton.classList.add("button-active");

    gridContainer.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "white";
        event.target.style.backgroundColor = "white";
    });
});