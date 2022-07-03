import {openPopup, closePopup, closeByEscape} from './modals.js';
import {mobilePopup, mobileOpenButton, mobileCloseButton, firstDate, secondDate} from './utils/constants.js';

mobileOpenButton.addEventListener('click', evt => {
  openPopup(mobilePopup);
})

mobileCloseButton.addEventListener('click', evt => {
  closePopup(mobilePopup)
})

if (window.innerWidth <= 490) {
  firstDate.textContent = 'вт, 25 сен';
  secondDate.textContent = 'ср, 26 сен';

} else {
  firstDate.textContent = 'пн, 24 сен — ср, 26 сен';
  secondDate.textContent = 'чт, 27 сен — пт, 28 сен'
}