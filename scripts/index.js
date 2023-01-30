// Объявляем переменные 
const popupProfile = document.querySelector('.popup-profile');
const popupProfileOpenButton = document.querySelector('.profile__edit-button');
const popupProfileCloseButton = popupProfile.querySelector('.popup-profile__close');
const popupProfileForm = document.querySelector('.popup-profile__form');
const nameInput = document.querySelector('.popup-profile__field_info_name');
const jobInput = document.querySelector('.popup-profile__field_info_job');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupElement = document.querySelector('.popup-element');
const popupElementOpenButton = document.querySelector('.profile__add-button');
const popupElementCloseButton = document.querySelector('.popup-element__close');
const popupElementForm = document.querySelector('.popup-element__form');
const popupElementImageInput = document.querySelector('.popup-element__field_image');
const popupElementNameInput = document.querySelector('.popup-element__field_name');
const elementContainer = document.querySelector('.elements');
const elementTemplate = elementContainer.querySelector('.element-template').content.querySelector('.element');
const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');
const popupImagePicture = popupImage.querySelector('.popup-image__picture');
const popupImageName = popupImage.querySelector('.popup-image__name');

// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// Функция отправки формы в профиле
function handleProfileFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Обработчки события
popupProfileOpenButton.addEventListener('click', () => {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
 });
popupProfileCloseButton.addEventListener('click', () => {
  closePopup(popupProfile)
 });
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

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
function createElement(name, link) {
  const element = elementTemplate.cloneNode(true);
  element.querySelector('.element__name').textContent = name;
  element.querySelector('.element__image').src = link;
  element.querySelector('.element__image').alt = name;

  // Функция постановки лайка
  element.querySelector('.element__like').addEventListener('click', evt => {
    evt.target.classList.toggle('element__like_active');
  })

  //  Функция удаления карточки
  element.querySelector('.element__remove-button').addEventListener('click', evt => {
  const card = evt.target.closest('.element');
  card.remove();
  })

  // Функция открытия картинки
  element.querySelector('.element__image').addEventListener('click', evt => {
    const picture = evt.target.closest('.element');
    const elementPicture = picture.querySelector('.element__image').src;
    const elementName = picture.querySelector('.element__name').textContent;
    popupImagePicture.src = elementPicture;
    popupImageName.textContent = elementName;
    popupImagePicture.alt = elementName;
    openPopup(popupImage);
    popupImageCloseButton.addEventListener('click', () => {
      closePopup(popupImage)
    }); 
  });

  return element;
}

// Функция добавления карточки при загрузке страницы
initialCards.forEach(function (item) {
    const card = createElement(item.name, item.link);
    elementContainer.prepend(card);
  });

// Функция ручного добавления карточки
function handleElementFormSubmit (event) {
  event.preventDefault();
  const newCard = createElement(popupElementNameInput.value, popupElementImageInput.value);
  elementContainer.prepend(newCard);
  //closePopupElement();
  closePopup(popupElement);
  popupElementForm.reset()
}

popupElementOpenButton.addEventListener('click', () => {
  openPopup(popupElement)
})
popupElementCloseButton.addEventListener('click', () => {
  closePopup(popupElement)
})
popupElementForm.addEventListener('submit', handleElementFormSubmit);