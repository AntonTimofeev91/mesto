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
const cardTemplate = cardContainer.querySelector('.element-template').content.querySelector('.element');
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

// 6 карточек из "коробки"
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

// Функция создания карточки 
function createCard(name, link) {
  const cloneCard = cardTemplate.cloneNode(true);
  cloneCard.querySelector('.element__name').textContent = name;
  cloneCard.querySelector('.element__image').src = link;
  cloneCard.querySelector('.element__image').alt = name;

  // Функция постановки лайка
  cloneCard.querySelector('.element__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like_active');
  })

  //  Функция удаления карточки
  cloneCard.querySelector('.element__remove-button').addEventListener('click', evt => {
  const card = evt.target.closest('.element');
  card.remove();
  })

  // Функция открытия картинки
  cloneCard.querySelector('.element__image').addEventListener('click', evt => {
    const picture = evt.target.closest('.element');
    const cardPicture = picture.querySelector('.element__image').src;
    const cardName = picture.querySelector('.element__name').textContent;
    popupImagePicture.src = cardPicture;
    popupImageName.textContent = cardName;
    popupImagePicture.alt = cardName;
    openPopup(popupImage);
  });

  return cloneCard;
}

// Функция добавления карточки при загрузке страницы
initialCards.forEach(function (item) {
    const card = createCard(item.name, item.link);
    cardContainer.prepend(card);
  });

// Функция ручного добавления карточки
function handleCardFormSubmit (event) {
  event.preventDefault();
  const newCard = createCard(popupCardNameInput.value, popupCardImageInput.value);
  cardContainer.prepend(newCard);
  closePopup(popupCard);
  popupCardForm.reset()
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