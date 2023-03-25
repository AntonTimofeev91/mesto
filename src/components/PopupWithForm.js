import Popup from './Popup.js'

class PopupWithForm extends Popup {
  constructor(callbakSubmit, popupSelector) {
    super(popupSelector);
    this._callbakSubmit = callbakSubmit;
    this._form = this._popup.querySelector('.popup__form')
    this._button = this._form.querySelector('.popup__button')
    this._inputList = Array.from(this._form.querySelectorAll('.popup__input'));
    this._buttonText = this._button.textContent;
  }

  setValueInputs({ data }) {
    this._inputList.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  renderLoading(isLoading, loadingText = 'Сохранение...') {
    if (isLoading) {
      this._button.textContent = loadingText;
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callbakSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }   
}

export default PopupWithForm;