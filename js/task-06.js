const textInput = document.querySelector('#validation-input');



textInput.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	
	if (Number(textInput.dataset.length) === event.currentTarget.value.length) { 

		textInput.classList.remove("invalid");
		textInput.classList.add("valid");
		
	} else {
		textInput.classList.add("invalid");
	}
};
