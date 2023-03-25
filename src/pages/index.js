// Импортируем объекты
import {
  validateSettings, 
  cardSettings, 
  formSettings, 
  popupProfileOpenButton, 
  popupCardOpenButton, 
  popupAvatarOpenButton
} from '../utils/constants.js';
import Api from '../components/Api.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import './index.css';

// Данные для работы с API
const api = new Api('https://mesto.nomoreparties.co/v1/cohort-61', 'b87cc32b-7ed7-43b0-9fc7-cc201d52831c');

// Добавляем валидацию полей поппапа
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.popupFormSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(validateSettings, formElement);
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

const formValidators = {};
enableValidation(formSettings);

// Данные пользователя
const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__about',
  avatarSelector: '.profile__avatar-image'
});

// Попап редактирования данных пользователя
const popupProfile = new PopupWithForm((userData) => {
  popupProfile.renderLoading(true)
  api.editUserInfo({ item: userData })
    .then((res) => {
      userInfo.setUserInfo({ data: res });
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    })
}, '.popup-profile');

popupProfile.setEventListeners();
popupProfileOpenButton.addEventListener('click', () => {
  popupProfile.open();
  popupProfile.setValueInputs({ data: userInfo.getUserInfo() });
  formValidators[formSettings.popupProfileForm].resetErrors();
  formValidators[formSettings.popupProfileForm].disableSubmiButton();
});

// Попап изменения картинки пользователя
const popupAvatar = new PopupWithForm((data) => {
  popupAvatar.renderLoading(true)
  api.editAvatar({ item: data }).then((res) => {
    userInfo.setUserInfo({ data: res });
    popupAvatar.close();
  })
  .catch((err) => console.log(err))
  .finally(() => {
    popupAvatar.renderLoading(false);
  })
}, '.popup-avatar');

popupAvatar.setEventListeners();
popupAvatarOpenButton.addEventListener('click', () => {
  popupAvatar.open();
   formValidators[formSettings.popupAvatarForm].resetErrors();
   formValidators[formSettings.popupAvatarForm].disableSubmiButton();
})

// Функция отрисовки карточек
const defaultCardList = new Section({
  renderer: (item) => {
    defaultCardList.addItem(generateCard({ data: item }));
  }
}, '.elements')

//Создание карточки
function generateCard({ data }) {
  const card = new Card({
    cardData: data,
    handleDeleteIconClick: (() => {
      popupDelete.setParams(card);
      popupDelete.open();
    }),
    handleCardClick: (data) => {
      popupImage.open({ data: data });
    },
    handleLikeClickApi: (card) => {
      if (!card.getLikeState()) api.likeCard(card.getCardId())
        .then((res) => {
          card.setLikeCount(res.likes.length);
          card.editLike();
        })
        .catch((err) => {
          console.log(err);
        })
      else api.deleteLike(card.getCardId())
        .then((res) => {
          card.setLikeCount(res.likes.length);
          card.editLike();
        })
        .catch((err) => {
          console.log(err);
        })
    },
  }, '.element-template', userInfo.getUserInfo()._id, cardSettings)
  const cardElement = card.generateCard();
  return cardElement;
}

// Отрисовка карточекпри запуске страницы
api.getAllCardWhithUser()
  .then(([cards, user]) => {
  userInfo.setUserInfo({ data: user });
  defaultCardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err)
  });

// Попап добавление новой карточки
const popupCard = new PopupWithForm((cardData) => {
  popupCard.renderLoading(true);
  api.addNewCard({ item: cardData })
    .then((newCard) => {
      defaultCardList.addItemStart(generateCard({ data: newCard }));
      popupCard.close();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupCard.renderLoading(false);
    })
}, '.popup-element');

popupCard.setEventListeners();
popupCardOpenButton.addEventListener('click', () => {
  popupCard.open();
  formValidators[formSettings.popupCardForm].resetErrors();
  formValidators[formSettings.popupCardForm].disableSubmiButton();
});

// Попап подтверждения удаления новой карточки
const popupDelete = new PopupConfirm(() => {
  popupDelete.renderLoading(true);
  const card = popupDelete.getParams();
  api.deleteCard(card.getCardId())
    .then((res) => {
      card.handleRemoveCardClick();
      popupDelete.close();
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupDelete.renderLoading(false);
    });
}, '.popup-delete')

popupDelete.setEventListeners();

// Попап увеличения картинки
const popupImage = new PopupWithImage('.popup-image');
popupImage.setEventListeners();













