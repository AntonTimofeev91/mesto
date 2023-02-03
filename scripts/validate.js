//Функция показа ошибки при прохождении валидации
const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
};

//Функция скрытия ошибки при прохождении валидации
const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
};
 
//
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement,inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement,);
  }
};

function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');
  buttonElement.classList.add('popup__button_disabled');
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    })
  })
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      disabledButton(formElement);
    });
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup_fieldset'));

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    }); 
    
    setEventListeners(formElement);
  });
}

enableValidation();


function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}; 

//Функция активации и деактивации sabmit
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
    buttonElement.removeAttribute('disabled');
  }
}

//Функция деактивации sabmit после создания карточки
function disabledButton(formElement) {
  const buttonElement = formElement.querySelector('.popup__button');
  buttonElement.classList.add('popup__button_disabled');
  buttonElement.setAttribute('disabled', 'disabled');
}