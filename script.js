const previousOperation = document.getElementById('previousOp');
const currentOperation = document.getElementById('currentOp');
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');
const plusMinus = document.getElementById('plusMinus');
const percent = document.getElementById('percent');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
//let currentOp;
//let previousOp;

function appendNumber(number) {
	if (number === '.' && currentOperation.textContent.includes('.')) return;
	currentOperation.textContent += number;
}
function chooseOperation(operation) {}
function clear() {
	currentOperation.textContent = '';
	previousOperation.textContent = '';
}
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		appendNumber(button.textContent);
	});
});
clearButton.addEventListener('click', clear);
