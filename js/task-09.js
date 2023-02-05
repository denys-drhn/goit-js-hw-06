function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyElement = document.querySelector('body')

const changeColorBtn = document.querySelector('button.change-color');

const valueColor = document.querySelector('span.color');


changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick(event) {
	bodyElement.style.backgroundColor = getRandomHexColor();

	valueColor.textContent = bodyElement.style.backgroundColor;
};

