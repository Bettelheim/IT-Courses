function calcAmount() {
	let price = 1200;
	let amountInput = document.querySelector("input[name='amount-input']");
	let showAmount = document.querySelector("span.show-amount");
	let amount = parseInt(amountInput.value) * price;
	showAmount.innerHTML = amount;
}

/* let amountInput = document.querySelector("input[name='amount-input']");
let price = 1200;
let amount = 0;

const getPrice = () => {
	amount = parseInt(amountInput.value) * price;
	console.log(amount);
};

getPrice(); */

/* let amount = 0;
let uPrice = 1200;
const output = document.getElementById("output");

const getInitialPrice = () => {
	amount = document.querySelector("input[name='amount-input']").value;

	price = amount * uPrice;

	output.innerHTML = price;
};

const updatePrice = ({ target: { value } }) => {
	amount = parseInt(value || 0);
	price = amount * uPrice;

	output.innerHTML = price;
}; */

getInitialPrice();
