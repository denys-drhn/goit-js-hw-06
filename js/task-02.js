const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

const listElements = [];

	ingredients.forEach(element => {
	const liElement = document.createElement("li");
	liElement.textContent = element;
	liElement.classList.add('item');
	
	listElements.push(liElement);
	});

list.append(...listElements);




