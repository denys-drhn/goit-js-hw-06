const textInput = document.querySelector('#name-input');
console.log(textInput);
const textOutput = document.querySelector('#name-output');
console.log(textOutput);

textInput.addEventListener('input', onInputTyping);

function onInputTyping(event) {
	if (event.currentTarget.value.trim() !== '') {
		textOutput.textContent = event.currentTarget.value;
	} else textOutput.textContent = 'Anonymous';
};
