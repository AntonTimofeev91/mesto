class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') this.close();
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (!evt.target.closest('.popup__container'))
      this.close();
    })
      
    this._popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close-icon'))
      this.close();
    })
  }    
}

export default Popup;