export const popupProfile = document.querySelector('.popup-profile');
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const popupProfileForm = document.querySelector('.popup-profile__form');
export const nameInput = document.querySelector('.popup-profile__input-info-name');
export const jobInput = document.querySelector('.popup-profile__input-info-job');
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const popupCard = document.querySelector('.popup-element');
export const popupCardOpenButton = document.querySelector('.profile__add-button');
export const popupCardForm = document.querySelector('.popup-element__form');
export const popupImage = document.querySelector('.popup-image');

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
  containerSelector: '.elements'
}; 