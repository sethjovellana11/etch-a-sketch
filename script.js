const gridContainer = document.querySelector('#container');
const input = document.querySelector('input');
const generateBtn = document.querySelector('#generateBtn');
const resetBtn = document.querySelector('#resetBtn');
const blackBtn = document.querySelector('#blackBtn');
const rgbBtn = document.querySelector('#rgbBtn');

let resetSize = 16;
let blackSelected = true;
let rgbSelected = false;
let r, g, b;

function createGrid(size) {
    gridContainer.innerHTML = '';

    if (size < 1 || size > 100) {
        alert("Please enter a valid number.");
        return;
    }

    const gridSize = size * size;
    const gridSquareSize = 100 / size;

    for (let i = 0; i < gridSize; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.flexBasis = `${gridSquareSize}%`;
        gridSquare.style.height = `${gridSquareSize}%`;

        if (blackSelected){
            gridSquare.addEventListener('mouseenter', (e) => {
                gridSquare.style.backgroundColor = 'black';
            });      
        } else if (rgbSelected) {
            gridSquare.addEventListener('mouseenter', (e) => {
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                gridSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });    
        }

        gridContainer.append(gridSquare);
    }
}

generateBtn.addEventListener('click', () => {
    const newSize = parseInt(input.value);
    resetSize = newSize;
    createGrid(newSize);
});

resetBtn.addEventListener('click', () => {
    createGrid(resetSize);
});

blackBtn.addEventListener('click', () => {
    blackSelected = true;
    rgbSelected = false;
    blackBtn.style.border = '10px solid orangered';
    rgbBtn.style.border = '4px solid red';
    resetBtn.click();
});

rgbBtn.addEventListener('click', () => {
    rgbSelected = true;
    blackSelected = false;
    rgbBtn.style.border = '10px solid orangered';
    blackBtn.style.border = 'none';
    resetBtn.click();
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        generateBtn.click();
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'R' || event.key === 'r') {
        resetBtn.click();
    }
});

window.addEventListener('load', () => {
    input.value = 16;
    const initialSize = parseInt(input.value);
    blackBtn.style.border = '10px solid orangered';
    createGrid(initialSize);
});

