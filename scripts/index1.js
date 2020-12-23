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

const popupElement = document.querySelector('.popup-element');
const popupElementOpenButton = document.querySelector('.profile__add-button');
const popupElementCloseButton = document.querySelector('.popup-element__close');
const elementForm = document.querySelector('.popup-element__form');
const elementFieldImage = document.querySelector('.popup-element__field_image');
const elementFieldName = document.querySelector('.popup-element__field_name');
const elementImage = document.querySelector('.element__image');
const placeParagraph = document.querySelector('.place__paragraph');

let popupElementToggle = function () {
  if (popupElement.classList.contains('popup_opened')) {
      
  } 
  popupElement.classList.toggle('popup_opened');
}

popupElementOpenButton.addEventListener('click', popupElementToggle);
popupElementCloseButton.addEventListener('click', popupElementToggle);

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
const addElementToForm = document.querySelector('.popup-element__form');

const addItemToContainer = (name, link) => {
    const placeElement = document.querySelector('#element-template').content.cloneNode(true);
    placeElement.querySelector('.element__name').textContent = name;
    placeElement.querySelector('.element__image').src = link;
    placeElement.querySelector('.element__like').addEventListener('click', evt => {
        evt.target.classList.toggle('element__like_active');
    });
    placeElement.querySelector('.element__remove-button').addEventListener('click', evt => {
        const element = evt.target.closest('.element');
        element.remove();
    })
    elementContainer.prepend(placeElement);
}

initialCards.forEach(cards => {
    addItemToContainer(cards.name, cards.link)
});

addElementToForm.addEventListener('submit', evt => {
    evt.preventDefault()
    const placeElement = addElementToForm.querySelector('.popup-element__field_name').value;
    const placeElement1 = addElementToForm.querySelector('.popup-element__field_image').value;
    addItemToContainer(placeElement, placeElement1);
    popupElementToggle();
    addElementToForm.reset();
});



const popupImage = document.querySelector('.popup-image');
const popupImageCloseButton = popupImage.querySelector('.popup-image__close');

elementsImage.addEventListener('click', event => {
    const element = event.target.closest('.element');
    const elementPicture = element.querySelector('.element__image').src;
    const elementName = element.querySelector('.element__name').textContent;
    popupImage.querySelector('.popup-image__picture').src = elementPicture;
    popupImage.querySelector('.popup-image__name').textContent = elementName;
    popupImage.classList.add('popup-image_opened');
});

function closePopupImage() {
    popupZoom.classList.remove('popup-image_opened');
}

popupImageCloseButton.addEventListener('click', closePopupImage);