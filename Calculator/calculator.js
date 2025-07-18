const display = document.getElementById("display");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Using Function instead of eval for slightly safer execution
        display.value = new Function('return ' + display.value)();
    } catch {
        display.value = "Error";
    }
}
