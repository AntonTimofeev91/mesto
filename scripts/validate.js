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
    formElement.addEventListener('submit', () => {
      disabledButton(formElement, settings);
    });
    
    setEventListeners(formElement, settings);
  });
}

enableValidation(settings);

function setEventListeners(formElement, settings) {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  disabledButton(formElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, formElement, buttonElement, settings);
    })
  })
}

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement,inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement,);
  }
};

//Функция показа ошибки при прохождении валидации
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
};

//Функция скрытия ошибки при прохождении валидации
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
};

//Функция активации и деактивации sabmit
function toggleButtonState(inputList, formElement, buttonElement, settings) {
  if (hasInvalidInput(inputList)) {
    disabledButton(formElement, settings);
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
function disabledButton(formElement, settings) {
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  buttonElement.classList.add(settings.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 'disabled');
}