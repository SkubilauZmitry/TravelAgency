// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// header

const headerLangBy = document.querySelector(".header__lang-by ");
const headerLangEng = document.querySelector(".header__lang-eng ");
const headerLanguageImage = document.querySelector(".header__language-image");
headerLangEng.addEventListener("click", function (event) {
    headerLangBy.classList.toggle("active");
    headerLanguageImage.classList.toggle("active-two");
});

document.addEventListener("click", function (event) {
    if (!event.target.closest('.header__language')) {
        headerLangBy.classList.remove("active");
    }
});

document.addEventListener("keyup", function (event) {
    if (event.code === "Escape") {
        headerLangBy.classList.remove("active");
    };
});

// section-one



const sectionOneFormBlock = document.querySelector(".section-one__form-block");
const sectionOneFormBlockTwo = document.querySelector(".section-one__form-block-two");
sectionOneFormBlock.addEventListener("click", function (event) {
    sectionOneFormBlock.classList.toggle("active-form");
    sectionOneFormBlockTwo.classList.toggle("active-form");
    sectionOneFormBlockTwo.classList.toggle("active-form-two");
});
sectionOneFormBlockTwo.addEventListener("click", function (event) {
    sectionOneFormBlock.classList.toggle("active-form");
    sectionOneFormBlockTwo.classList.toggle("active-form-two");
});

// document.addEventListener("click", function (event) {
//     if (!event.target.closest('.header__language')) {
//         headerLangBy.classList.remove("active");
//     }
// });

// document.addEventListener("keyup", function (event) {
//     if (event.code === "Escape") {
//         headerLangBy.classList.remove("active");
//     };
// });
