const headerBurger = document.querySelector('.header__burger')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
headerBurger.addEventListener('click', () => {
    popup.style.display = 'block'
})

popupClose.addEventListener('click', () => {
    popup.style.display = 'none'
})