//Создаем класс Popup, который отвечает за закрытие и открытие попапа
class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBatton = this._popup.querySelector('.popup__close');
    this._closeByEsc = this._closeByEsc.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closeByEsc);
  }  
  
  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closeByEsc);
  }
  
  _closeByEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  
  setEventListeners() {
    this._popupCloseBatton.addEventListener('click', () => {
      this.close();
    })

    this._popup.addEventListener('mousedown', (evt) => {
      if (!evt.target.closest('.popup__container')) {
        this.close();
      };
    });
  }
}

export default Popup;