// Настройки валидации
export const validateSettings = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  errorInput: '.popup__error',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
}

// Настройки карточки
export const cardSettings = {
  card: '.element',
  cardLike: '.element__like',
  cardLikeActive: 'element__like_active',
  cardLikeCount: '.element__like-count',
  cardTitle: '.element__name',
  cardImage: '.element__image',
  cardDelete: '.element__remove-button',
  cardDeleteDeactive: 'element__remove-button_deactive',
}

// Настройки формы попапа
export const formSettings = {
  popupFormSelector: '.popup__form',
  popupProfileForm : 'editProfile',
  popupCardForm : 'addElement',
  popupAvatarForm : 'editAvatar'
}

// Переменные
export const popupProfileOpenButton = document.querySelector('.profile__edit-button');
export const popupAvatarOpenButton = document.querySelector('.profile__avatar-overlay');
export const popupCardOpenButton = document.querySelector('.profile__add-button');