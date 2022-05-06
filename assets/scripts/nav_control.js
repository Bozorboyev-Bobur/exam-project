//burger menu activing and deactivating
const burgerMenu = document.querySelector('.burger-menu');
const headerSettings = document.querySelector('.header__setting');
const navbarLogo = document.querySelector('.site-logo');
const navMenu = document.querySelector('.navbar');
const burgerBG = document.querySelector('.deactive');
const navLinks = document.querySelectorAll('.navbar__item a');

burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('burger-menu-active')) {
        clearActiveBurger()
    } else {
        addActiveBurger();
    }
});

//clear burger activity if click navLinks
navMenu.addEventListener('click', (e) => {
    navLinks.forEach(item => {
        if (e.target === item) {
            clearActiveBurger();
        }
    })
});
burgerBG.addEventListener('click', clearActiveBurger);
// modal.classList.contains('')

let screnWidth = document.documentElement.offsetWidth;
window.addEventListener('resize', () => {
    const pageWidth = document.documentElement.scrollWidth;
    const windowInnerWidth = window.innerWidth;
    screnWidth = document.documentElement.offsetWidth;
    if (pageWidth > 767 || windowInnerWidth > 767) {
        clearActiveBurger();
        clearActiveModal();
    }
});

function addActiveBurger() {
    headerSettings.style.display = 'none';
    navbarLogo.style.display = 'none';
    burgerMenu.classList.add('burger-menu-active');
    navMenu.classList.add('nav-active');
    document.body.style.overflow = 'hidden';
    burgerBG.classList.add('body-active');
}

function clearActiveBurger() {
    headerSettings.style.display = '';
    navbarLogo.style.display = '';
    burgerMenu.classList.remove('burger-menu-active');
    navMenu.classList.remove('nav-active');
    document.body.style.overflow = '';
    burgerBG.classList.remove('body-active');
}





const modal = document.querySelector('.registration-active');
const registerBtn=document.querySelector('.registration__btn');
const signIn=document.querySelector('.registration');
const header=document.querySelector('.header')

registerBtn.addEventListener('click', () => {
    if (signIn.classList.contains('registration-active')) {
        clearActiveModal()
    } else {
        addActiveModal();
    }
});


burgerBG.addEventListener('click', clearActiveModal);


function addActiveModal() {
    signIn.classList.add('registration-active');
    signIn.classList.remove('registration');
    document.body.style.overflow = 'hidden';
    burgerBG.classList.add('body-active');
    burgerBG.style.zIndex=2;
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}

function clearActiveModal() {
    signIn.classList.remove('registration-active');
    signIn.classList.add('registration');
    document.body.style.overflow = '';
    burgerBG.classList.remove('body-active');
    burgerBG.style.zIndex=1;
}
