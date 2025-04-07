function appendToInput(value) {
    const display = document.getElementById('display');
    if (value === "." && display.value.includes(".")) return;
    display.value += value;
}

function Reset() {
  document.getElementById("display").value = "";
}

function Backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const expression = display.value.replace(/\^/g, '**');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

function SquareRoot() {
    const display = document.getElementById('display');
    try {
        const result = Math.sqrt(eval(display.value));
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function Percentage() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) / 100;
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
