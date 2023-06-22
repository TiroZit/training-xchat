export default class InputFile {
	constructor(inputs) {
		this.inputs = document.querySelectorAll(inputs)
		if(!this.inputs) return
		this.init()
	}
	init() {
		this.inputs.forEach(input => input.addEventListener('change', (event) => {
			const [file] = event.target.files
			const fileSize = input.getAttribute('data-max-size') || 50

			if((file.size / 1024 / 1024) < fileSize) {
				input.nextElementSibling.classList.add('active')
				input.nextElementSibling.querySelector('span').textContent = file.name
			} else {
				input.value = null
				alert(`Размер файла не может превышать ${fileSize} Мб`)
				// Если на проекте есть уведомления, расскоментируй ниже и убери alert
				//window.toast.error('Ошибка', `Размер файла не может превышать ${fileSize} Мб`)
			}
		}))
	}
}
