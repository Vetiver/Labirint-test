function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_open');
      closePopup(openedPopup);
    }
  }
    
  function openPopup(popup) {
    popup.classList.add('popup_open');
    document.addEventListener('keydown', closeByEscape);
  };//функция открытия любого попапа
    
  function closePopup(popup) {
    popup.classList.remove('popup_open');
    document.removeEventListener('keydown', closeByEscape);
  };//функция закрытия любого попапа
  
  export{openPopup, closePopup, closeByEscape};