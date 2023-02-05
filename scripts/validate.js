const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    formElement.addEventListener('submit', () => {
      disabledButton(formElement, buttonElement, settings);
    });
    
    setEventListeners(formElement, buttonElement, settings);
  });
}

enableValidation(settings);

function setEventListeners(formElement, buttonElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  disabledButton(formElement, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, formElement, buttonElement, settings);
    })
  })
}

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideError(formElement, inputElement, settings);
  }
};

//Функция показа ошибки при прохождении валидации
const showError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

//Функция скрытия ошибки при прохождении валидации
const hideError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
};

//Функция активации и деактивации sabmit
function toggleButtonState(inputList, formElement, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    disabledButton(formElement, buttonElement, settings);
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}; 

//Функция деактивации sabmit после создания карточки
function disabledButton(formElement, buttonElement, settings) {
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
}