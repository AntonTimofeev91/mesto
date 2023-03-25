import Popup from './Popup.js'

class PopupConfirm extends Popup {
  constructor(callbakSubmit, popupSelector) {
    super(popupSelector);
    this._button = this._popup.querySelector('.popup__button');
    this._callbakSubmit = callbakSubmit;
    this._buttonText = this._button.textContent;
  }

  setParams(card) {
    this._card = card;
  }

  getParams() {
    return this._card;
  }

  renderLoading(isLoading, loadingText = 'Удаление...') {
    if (isLoading) {
      this._button.textContent = loadingText;
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    this._button.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._callbakSubmit();
    });
      super.setEventListeners();
  }    
}

export default PopupConfirm;