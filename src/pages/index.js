import Card from '../components/Card.js';
import { 
  initialCards,
  settings,
  popupProfile,
  popupProfileOpenButton,
  popupProfileForm,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  popupCard,
  popupCardOpenButton,
  popupCardForm,
  popupImage 
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import './index.css';

// Добавляем изначальные данные в профиль при открытии попапа
const profileUserInfo = new UserInfo({
  name: profileName,
  job: profileJob,
});

// Добавляем данные в профиль вручную
const profileForm = new PopupWithForm('.popup-profile', (data) => {
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
  const card = new Card(item, '.element-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}

// Создаем карточку вручную
const cardForm = new PopupWithForm('.popup-element', (data) => {
  cardContainer.setItem(createCard(data));
  validationCard.disabledButton();
});
cardForm.setEventListeners();

// Открываем попап карточки
popupCardOpenButton.addEventListener(`click`, () => {
  cardForm.open();
});

// Открываем увеличенную версию картинки
const popupWithImage = new PopupWithImage('.popup-image');
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