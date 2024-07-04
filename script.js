
let array = [];

function updateDisplay() {
    document.getElementById('array-display').textContent = JSON.stringify(array);
}

function pushValue() {
    const value = document.getElementById('array-input').value;
    if (value) {
        array.push(value);
        document.getElementById('array-input').value = '';
        updateDisplay();
    }
}

function popValue() {
    array.pop();
    updateDisplay();
}

function shiftValue() {
    array.shift();
    updateDisplay();
}

function unshiftValue() {
    const value = document.getElementById('array-input').value;
    if (value) {
        array.unshift(value);
        document.getElementById('array-input').value = '';
        updateDisplay();
    }
}

// Initialize display
updateDisplay();