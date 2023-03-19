import { initialCards } from '../initialCards.js';
import Card from '../components/Card.js';
import { settings } from '../settings.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import '../../pages/index.css';

// Объявляем переменные 
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup-profile__input-info-name');
const jobInput = document.querySelector('.popup-profile__input-info-job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupCard = document.querySelector('.popup-element');
const popupCardOpenButton = document.querySelector('.profile__add-button');
const popupCardForm = document.querySelector('.popup-element__form');
const popupImage = document.querySelector('.popup-image');

// Добавляем изначальные данные в профиль при открытии попапа
const profileUserInfo = new UserInfo({
  name: profileName,
  job: profileJob,
});

// Добавляем данные в профиль вручную
const profileForm = new PopupWithForm(popupProfile, (data) => {
  profileUserInfo.setUserInfo(data);
});
profileForm.setEventListeners();

// Открываем попап профиля
popupProfileOpenButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  profileForm.open();
  const data = profileUserInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
});

// Добавляем карточки при загрузке страницы
const cardContainer = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = createCard(item);
      cardContainer.setItem(card);
    },
  },
  settings.containerSelector
);

cardContainer.renderItems();

// Функция создания карточки 
function createCard(item) {
  const card = new Card(item, '.element-template');
  const cardElement = card.generateCard();
  return cardElement;
}

// Создаем карточку вручную
const cardForm = new PopupWithForm(popupCard, (data) => {
  cardContainer.setItem(createCard(data));
  validationCard.disabledButton();
});
cardForm.setEventListeners();

// Открываем попап карточки
popupCardOpenButton.addEventListener(`click`, () => {
  cardForm.open();
});

// Открываем увеличенную версию картинки
const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();
function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

// Валидация попапа профиля
const validationProfile = new FormValidator(settings, popupProfileForm);
validationProfile.enableValidation();

// Валидация попапа карточки
const validationCard = new FormValidator(settings, popupCardForm);
validationCard.enableValidation();

export { handleCardClick };