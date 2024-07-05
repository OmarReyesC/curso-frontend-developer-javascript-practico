const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

//Experiment. Not to be kept.
/*menuEmail.addEventListener('click', toggleMenu(menuEmail));
menuHamIcon.addEventListener('click', toggleMobileMenu(menuHamIcon));

function toggleMenu(menuInstance) {
    menuInstance.classList.toggle('inactive');
};*/