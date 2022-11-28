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
	previousOperation.textContent = `${currentOperation.textContent} ${op}`;
	currentOperation.textContent = '';
}
function compute() {
	let result;
	const pv = parseFloat(previousOperation.textContent);
	const cr = parseFloat(currentOperation.textContent);
	if (isNaN(pv) && isNaN(cr)) return;
	switch (op) {
		case '+':
			result = pv + cr;
			break;
		case '-':
			result = pv - cr;
			break;
		case 'X':
			result = pv * cr;
			break;
		case '/':
			result = pv / cr;
			break;
		default:
			return;
	}
	currentOperation.textContent = result;
	previousOperation.textContent = '';
}
function clear() {
	currentOperation.textContent = '';
	previousOperation.textContent = '';
}
function minus() {
	currentOperation.textContent = currentOperation.textContent * -1;
}
function percentage() {
	currentOperation.textContent = currentOperation.textContent * 0.01;
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
equalsButton.addEventListener('click', compute);
plusMinus.addEventListener('click', minus);
percent.addEventListener('click', percentage);
