import { handleCardClick } from "./index.js";

class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardElement;
  }

  _deliteCard() {
    this._element.remove();
    this._element = null;
  }

  _likeCard() {
    this._likeButton.classList.toggle('element__like_active');
  }

  _setEventListeners() {
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._removeButton.addEventListener('click', () => {
      this._deliteCard();
    });

    this._likeButton = this._element.querySelector('.element__like');
    this._likeButton.addEventListener('click', () => {
      this._likeCard();
    });

    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.addEventListener('click', () => {
      handleCardClick(this._name, this._link);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
  
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__name').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
  
    return this._element;
  }
}

export default Card;