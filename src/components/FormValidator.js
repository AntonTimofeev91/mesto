class FormValidator {
  constructor(settings, form) {
    this._settings = settings;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector));
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
  }

  _showInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._settings.errorClass);
  }

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.classList.remove(this._settings.errorClass)
    errorElement.textContent = "";
  }

  _toggleInputErrorState = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    }
    else {
      this._hideInputError(inputElement);
    }
  }
  
  _hasInvalidInput = () => {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmiButton();
    }
    else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', false);
    }
  }

  resetErrors() {
    this._inputList.forEach((input)=>{
     this._hideInputError(input);
    });
  }
  
  disableSubmiButton() {
    this._buttonElement.setAttribute('disabled', true);
    this._buttonElement.classList.add(this._settings.inactiveButtonClass);
  }

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      input.addEventListener('input', () => {
        this._toggleInputErrorState(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation = () => {
    this._setEventListeners();
  };
}

export default FormValidator;