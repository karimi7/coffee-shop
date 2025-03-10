//

// Whitout localStorage

// let htmlElem = document.querySelector('html');
// const toggleThemeBtn = document.querySelector('#toggle-theme');

// toggleThemeBtn.addEventListener('click', function () {
//     htmlElem.classList.toggle('dark');
// });

/////////////////////////////////////////////////////////////////

// With localStorage

let htmlElem = document.querySelector('html');
const toggleThemeBtn = document.querySelector('#toggle-theme');

toggleThemeBtn.addEventListener('click' , function () {
    htmlElem.classList.toggle('dark')

    if (htmlElem.className.includes('dark')) {
        localStorage.setItem('theme' , 'dark')
    } else {
        localStorage.setItem('theme' , 'light')
    }
})

window.onload = function () {
    let localStorageTheme = localStorage.getItem('theme');

    if (localStorageTheme === 'dark') {
        htmlElem.classList.add('dark')
    }
}