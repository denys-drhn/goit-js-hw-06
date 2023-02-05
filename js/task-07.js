const inputElement = document.querySelector("#font-size-control");
// console.log(inputElement);
const textElement = document.querySelector('#text');
// textElement.style.fontSize = `55px`;

inputElement.addEventListener('input', OnInputRangePull)


function OnInputRangePull(event) {
	
	textElement.style.fontSize = `${Number(event.currentTarget.value)}px`;
}