const counterValue = {
	value: 0,
	increment() {
		this.value += 1;
	},
	
	decrement() {
		this.value -= 1;
	},
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

function onDecrementBtnClick(event) {
	counterValue.decrement();
	valueEl.textContent = counterValue.value;
};

function onIncrementBtnClick(event) {
	counterValue.increment();
	valueEl.textContent = counterValue.value;
};

decrementBtn.addEventListener('click', onDecrementBtnClick);

incrementBtn.addEventListener('click', onIncrementBtnClick);