import Popup from './Popup.js'

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup-image__picture');
    this._title = this._popup.querySelector('.popup-image__name');
  }

  open({ data }) {
    this._image.alt = data.name;
    this._title.textContent = data.name;
    this._image.src = data.link;
    super.open();
  }
}

export default PopupWithImage;