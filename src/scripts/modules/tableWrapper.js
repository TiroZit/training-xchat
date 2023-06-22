export default function initTableWrapper() {
	// Оборачиваем таблицы в контенте для адаптивности
	let tables = document.querySelectorAll('table:not([class])')
	tables.forEach((table) => {
		wrap(table, document.createElement('div'));
	})

	function wrap(el, wrapper) {
		el.parentNode.insertBefore(wrapper, el);
		wrapper.classList.add('table-wrap')
		wrapper.appendChild(el);
	}
}
