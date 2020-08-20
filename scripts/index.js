const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const fieldName = document.querySelector('.popup__field_name');
const fieldJob = document.querySelector('.popup__field_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

let popupToggle = function () {
  popup.classList.toggle('popup_opened');

  if (popup.classList.contains('popup_opened')) {
    fieldName.value = profileName.textContent;
    fieldJob.value = profileJob.textContent;
  }
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = fieldName.value;
  profileJob.textContent = fieldJob.value;
  popupToggle();
}

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);
formElement.addEventListener('submit', formSubmitHandler);