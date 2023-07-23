const openBurgerBtn = document.querySelector('.header__button-burger')
const closedBurgerBtn = document.querySelector('.burger__cross-icon')
const menuBurger = document.querySelector('.burger__menu')
const body = document.querySelector('body')
const eventsClose = document.querySelectorAll('.burger__link')

openBurgerBtn.addEventListener('click', onOpenBurger)
closedBurgerBtn.addEventListener('click', onClosedBurger)

function onOpenBurger (){
    menuBurger.classList.add('active__burger')
    body.classList.add('hidden-burger')
}

function onClosedBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden-burger')
}


for (let eventClose of eventsClose) {
    eventClose.addEventListener('click', onCloseModalBurger);
  }
function onCloseModalBurger (){
    menuBurger.classList.remove('active__burger')
    body.classList.remove('hidden-burger')
}