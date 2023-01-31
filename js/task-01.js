const countCategories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', countCategories.length);
// console.log(`Number of categories: ${countCategories.length}`);

// Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

countCategories.forEach(item => {
	console.log('Category:', item.firstElementChild.textContent);
	console.log('Elements:', item.lastElementChild.children.length);
}
)




