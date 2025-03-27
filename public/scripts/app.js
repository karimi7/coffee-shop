//

// With localStorage

const $ = document;
const htmlElem = $.querySelector('html');
const toggleThemeBtns = $.querySelectorAll('.toggle-theme');
const submenuOpenBtn = $.querySelector('.submenu-open-btn');
const submenu = $.querySelector('.submenu');
const activeSubmenu = $.querySelector('#active-submenu');
const chevron = $.querySelector('.chevron');
const barMenu = $.querySelector('#bar-menu');
const navMenu = $.querySelector('#nav-menu');
const darkbg = $.querySelector('#darkbg');
const xMark = $.querySelector('#xmark');
const openCart = $.querySelector('#open-cart');
const cartIcon = $.querySelector('#cart-icon');
const cartXMark = $.querySelector('#cart-xmark');

// console.log(toggleThemeBtns);

toggleThemeBtns.forEach((btn) => {
    btn.addEventListener('click', function () {
        htmlElem.classList.toggle('dark');

        if (htmlElem.className.includes('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});

submenuOpenBtn.addEventListener('click', () => {
    submenuOpenBtn.classList.toggle('h-10');
    submenu.classList.toggle('submenu-open');
    activeSubmenu.classList.toggle('text-orange-300');
    chevron.classList.toggle('-rotate-90');
});

barMenu.addEventListener('click', () => {
    navMenu.classList.remove('-right-65');
    navMenu.classList.add('right-0');
    darkbg.classList.remove('hidden');
    darkbg.addEventListener('click', closeMenu);
});

closeMenu = () => {
    navMenu.classList.add('-right-65');
    navMenu.classList.remove('right-0');
    darkbg.classList.add('hidden');
};

xMark.addEventListener('click', closeMenu);

openCart.addEventListener('click', () => {
    cartIcon.classList.remove('-left-65');
    cartIcon.classList.add('left-0');
    darkbg.classList.remove('hidden');
    darkbg.addEventListener('click', closeCart);
});

closeCart = () => {
    cartIcon.classList.add('-left-65');
    cartIcon.classList.remove('left-0');
    darkbg.classList.add('hidden');
};

cartXMark.addEventListener('click', closeCart);

window.onload = () => {
    let localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme === 'dark') {
        htmlElem.classList.add('dark');
    }
};
