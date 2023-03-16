import { initialCards } from './initialCards.js';
import Card from './Card.js';
import { settings } from './settings.js';
import FormValidator from './FormValidator.js';

// Объявляем переменные 
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupProfile.querySelector('.popup-profile__close');
const popupProfileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup-profile__input-info-name');
const jobInput = document.querySelector('.popup-profile__input-info-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupCard = document.querySelector('.popup-element');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardCloseButton = document.querySelector('.popup-element__close');
const popupCardForm = document.querySelector('.popup-element__form');
const popupCardImageInput = document.querySelector('.popup-element__input-image');
const popupCardNameInput = document.querySelector('.popup-element__input-name');
const cardContainer = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const popupImageName = popupImage.querySelector('.popup-image__name');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

//Функция закрытия попапа по кнопке Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
} 

// Функция отправки формы в профиле
function handleProfileFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Функция создания карточки 
function createCard(item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
}

// Функция добавления карточки при загрузке страницы
initialCards.forEach(function (item) {
    const card = createCard(item);
    cardContainer.prepend(card);
});

// Функция ручного добавления карточки
function handleCardFormSubmit (event) {
  event.preventDefault();
  const inputValue = {
    name: popupCardNameInput.value,
    link: popupCardImageInput.value,
  };
  const newCard = createCard(inputValue);
  cardContainer.prepend(newCard);
  closePopup(popupCard);
  popupCardForm.reset()
}

// Функция увеличения карточки
function handleCardClick(name, link) {
  popupImagePicture.src = link;
  popupImageName.textContent = name;
  popupImagePicture.alt = name;
  openPopup(popupImage);
}

// Навешиваем обработчики
popupProfileOpenButton.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
 });

popupCardOpenButton.addEventListener('click', () => {
  openPopup(popupCard)
});

popupProfileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile)
 });

popupImageCloseButton.addEventListener('click', () => {
  closePopup(popupImage)
}); 

popupCardCloseButton.addEventListener('click', () => {
  closePopup(popupCard)
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
popupCardForm.addEventListener('submit', handleCardFormSubmit);

popupProfile.addEventListener('mousedown', function(evt) {
  if (!evt.target.closest('.popup-profile__container')) {
    closePopup(popupProfile);
  };
});

popupCard.addEventListener('mousedown', function(evt) {
  if (!evt.target.closest('.popup-element__container')) {
    closePopup(popupCard);
  };
});

popupImage.addEventListener('mousedown', function(evt) {
  if (!evt.target.closest('.popup-image__container')) {
    closePopup(popupImage);
  };
});

const validationProfile = new FormValidator(settings, popupProfileForm);
validationProfile.enableValidation();

const validationCard = new FormValidator(settings, popupCardForm);
validationCard.enableValidation();

export { handleCardClick };