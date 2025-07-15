const gridContainer = document.querySelector('#container');
const input = document.querySelector('input');
const generateBtn = document.querySelector('#generateBtn');
const resetBtn = document.querySelector('#resetBtn');

let resetSize = 16;

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

        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = 'black';
        })

        gridContainer.append(gridSquare);
    }
}

generateBtn.addEventListener('click', () => {
    const newSize = parseInt(input.value);
    resetSize = newSize;
    input.value = '';
    createGrid(newSize);
});

resetBtn.addEventListener('click', () => {
    createGrid(resetSize);
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
    createGrid(initialSize);
});

