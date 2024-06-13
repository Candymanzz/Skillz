// const select = document.querySelector(".header-selct");
// const allLang = ["en", "ru"];
// const elems = [];
// const data = localStorage.getItem("language");

// select.addEventListener("change", changeURLLanguage);

// // перенаправить на url с указанием языка
// function changeURLLanguage() {
//   let lang = select.value;
//   location.href = window.location.pathname + "#" + lang;
//   localStorage.setItem("language", lang);
//   location.reload();
// }

// function changeLanguage() {
//   let hash = window.location.hash;
//   hash = hash.substr(1);
//   console.log(hash);
//   if (!allLang.includes(hash)) {
//     if (data == null) {
//       location.href = window.location.pathname + "#en";
//       localStorage.setItem("language", "en");
//     } else {
//       location.href = window.location.pathname + "#" + data;
//     }
//     location.reload();
//   }
//   select.value = hash;
//   for (let key in langArr) {
//     [...document.querySelectorAll(".lng-" + key)].forEach((item) => {
//       elems.push(item);
//     });
//     if (key == "input") {
//       if (document.querySelector(".lng-input") == null) {
//       } else {
//         document.querySelector(".lng-input").placeholder = langArr[key][hash];
//       }
//     }
//     elems.forEach((elem) => {
//       if (elem) {
//         elem.innerHTML = langArr[key][hash];
//       }
//     });
//     [...document.querySelectorAll(".lng-" + key)].forEach((item) => {
//       elems.pop();
//     });
//   }
// }

// changeLanguage();

const langArr = {
  title: {
    en: "Welcome",
    ru: "Добро пожаловать",
  },
  qwe: {
    en: "This is some content.",
    ru: "Это некоторое содержание.",
  },
  input: {
    en: "Enter text",
    ru: "Введите текст",
  },
};

// Get the language selection element
const langSelectElement = document.querySelector(".header-selct");

// Get the current language from the URL or localStorage
let currentLang =
  new URLSearchParams(window.location.search).get("lang") ||
  localStorage.getItem("lang") ||
  "en";

// Set the selected language in the dropdown
langSelectElement.value = currentLang;

// Function to update the page content based on the selected language
function changeLanguage() {
  const elements = document.querySelectorAll('[class^="lng-"]');
  elements.forEach((element) => {
    const className = element.className.split("-")[1];
    element.textContent = langArr[className][currentLang];
  });
}

// Call the changeLanguage function to update the initial content
changeLanguage();

// Add an event listener to the language selection dropdown
langSelectElement.addEventListener("change", () => {
  currentLang = langSelectElement.value;
  changeURLLanguage(currentLang);
  changeLanguage();
});

// Function to update the URL with the selected language
function changeURLLanguage(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.pushState({}, "", url.toString());
  localStorage.setItem("lang", lang);
}
