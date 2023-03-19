import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._popupForm = this._popupSelector.querySelector('.popup__form');
    this._popupInput = Array.from(this._popupForm.querySelectorAll('.popup__input'));
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._data = {};
    this._popupInput.forEach((input) => {
      this._data[input.name] = input.value;
    });
    return this._data;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
}
export default PopupWithForm;