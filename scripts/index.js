// Объявляем переменные
const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = popup.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__field_info_name');
const jobInput = document.querySelector('.popup__field_info_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');

// Функция открытия попапа
let openPopup = function () {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

// Функция закрытия попапа
let closePopup = function () {
  popup.classList.remove('popup_opened');
}

// Функция отправки формы
function formSubmitHandler (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

// Обработчки события
popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

// Объявляем переменные 
const popupElement = document.querySelector('.popup-element');
const popupElementOpenButton = document.querySelector('.profile__add-button');
const popupElementCloseButton = document.querySelector('.popup-element__close');
const popupElementForm = document.querySelector('.popup-element__form');
const popupElementImageInput = document.querySelector('.popup-element__field_image');
const popupElementNameInput = document.querySelector('.popup-element__field_name');
const elementName = document.querySelector('.element__name');

// Функция открытия попапа добавления картинки
let openPopupElement = function () {
  popupElement.classList.add('popup_opened');
}

// Функция закрытия попапа добавления картинки
let closePopupElement = function () {
  popupElement.classList.remove('popup_opened');
}

popupElementOpenButton.addEventListener('click', openPopupElement);
popupElementCloseButton.addEventListener('click', closePopupElement);

// Создем 6 карточек при загрузке страницы
const initialCards = [
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


const elementContainer = document.querySelector('.elements');
const elementTemplate = elementContainer.querySelector('.element-template').content.querySelector('.element');

// Функция создания карточки при загрузке страницы
function createElement(name, link) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__name').textContent = name;
  element.querySelector('.element__image').src = link;

  return element;
}

// Функция добавления карточки при загрузке страницы
function renderElements() {
  initialCards.forEach(function (item) {
    const card = createElement(item.name, item.link);
    elementContainer.prepend(card);
    likeElement();
    deliteElement();
    openPicture();
  });
}

renderElements();

// Функция ручного добавления карточки
function elementFormSubmitHandler (event) {
  event.preventDefault();
  const newCard = createElement(popupElementNameInput.value, popupElementImageInput.value);
  elementContainer.prepend(newCard);
  closePopupElement();
  popupElementForm.reset()
  likeElement()
  deliteElement()
  openPicture();
}

popupElementForm.addEventListener('submit', elementFormSubmitHandler);

// Функция постановки лайка
function likeElement() {
  document.querySelector('.element__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like_active');
})}

//  Функция удаления карточки
function deliteElement() {
  document.querySelector('.element__remove-button').addEventListener('click', evt => {
  const element = evt.target.closest('.element');
  element.remove();
  })}

const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');

// Функция открытия картинки
function openPicture() {
  const elementImage = document.querySelector('.element__image');
  elementImage.addEventListener('click', function(event) {
    const picture = event.target.closest('.element');
    const elementPicture = picture.querySelector('.element__image').src;
    const elementtName = picture.querySelector('.element__name').textContent;
    popupImage.querySelector('.popup-image__picture').src = elementPicture;
    popupImage.querySelector('.popup-image__name').textContent = elementtName;
    popupImage.classList.add('popup-image_opened');
  });
}

// Функция закрытия попапа с картинкой
function closePopupImage() {
    popupImage.classList.remove('popup-image_opened');
}

popupImageCloseButton.addEventListener('click', closePopupImage);