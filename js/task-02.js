const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

ingredients.forEach(element => {
	const liElement = document.createElement("li");
	liElement.textContent = element;
	liElement.classList.add('item');
	const list = document.querySelector('#ingredients');
	list.append(liElement);	
});







