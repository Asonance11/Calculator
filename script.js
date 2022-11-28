const previousOperation = document.getElementById('previousOp');
const currentOperation = document.getElementById('currentOp');
const clearButton = document.getElementById('clearButton');
const equalsButton = document.getElementById('equalsButton');
const plusMinus = document.getElementById('plusMinus');
const percent = document.getElementById('percent');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
let op;

function appendNumber(number) {
	if (number === '.' && currentOperation.textContent.includes('.')) return;
	currentOperation.textContent += number;
}
function chooseOperation(operation) {
	if (currentOperation.textContent === '') return;
	if (previousOperation.textContent !== '') {
		compute();
	}
	op = operation;
	previousOperation.textContent = currentOperation.textContent;
	currentOperation.textContent = '';
}
function compute() {
	let result;
	if (
		isNaN(currentOperation.textContent) &&
		isNaN(previousOperation.textContent)
	)
		return;
}
function clear() {
	currentOperation.textContent = '';
	previousOperation.textContent = '';
}
numberButtons.forEach((button) => {
	button.addEventListener('click', () => {
		appendNumber(button.textContent);
	});
});
operationButtons.forEach((button) => {
	button.addEventListener('click', () => {
		chooseOperation(button.textContent);
	});
});
clearButton.addEventListener('click', clear);
