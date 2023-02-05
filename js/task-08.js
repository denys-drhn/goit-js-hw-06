const formElement = document.querySelector('form.login-form');

formElement.addEventListener('submit', onFormSubmit);
	
	function onFormSubmit(event) {
		event.preventDefault(); // отмена действие(перезагрузка страници) по умолчанию методом preventDefault()
		const formElements = event.currentTarget.elements;
		const mail = formElements.email.value;
		const password = formElements.password.value;		
		const formData = {
			mail, password
		};
		
		if (mail === "" || password === "") {
			return alert("Please fill in all the fields!"); // выводи alert
		} else { console.log(formData); } //  Выведи обьект с введенными данными в консоль

		event.currentTarget.reset(); // очисти значения полей формы методом reset.
};