/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const picker = datepicker('[data-datepicker]', {
		customDays: ["Пн", "Ат", "Ср", "Чц", "Пт", "Сб", "Нд"],
		customMonths: ["Ст", "Лют", "Сак", "Крас", "Трав", "Чэрв", "Ліп", "Жнів", "Верес", "Каст", "Лістоп", "Снеж"],
		overlayButton: 'Ужыць',
		overlayPlaceholder: 'Год (4 лічбы)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	flsModules.datepicker = picker;
}
