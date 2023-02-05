function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// -------------------------------

const inputNumber = document.querySelector('#controls input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const divBoxes = document.querySelector('#boxes');

buttonCreate.addEventListener('click', createBoxes);
buttonDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
	
	amount = inputNumber.value;

	const listItems = [];

	for (let index = 0; index < amount; index+=1) {
	// amount.forEach((element, index) => {
		const listElement = document.createElement('div');
		listElement.style.width = 30 + index * 10 + "px";
		listElement.style.height = 30 + index * 10 + "px"
		listElement.style.backgroundColor = getRandomHexColor();

		listItems.push(listElement);

	};
	
	divBoxes.append(...listItems);

}

function destroyBoxes() {
	divBoxes.innerHTML = "";
	inputNumber.value = "";
}







// Перебирающий метод массива который используется как замена циклов for и for...of при работе с коллекцией данных.
// массив.forEach(function callback(element, index, array) {
//   // Тело коллбек-функции
// });