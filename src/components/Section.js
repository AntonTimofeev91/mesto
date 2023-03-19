//Создаем класс Section, который управляет разметкой других классов
class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  setItem(element) {
    this._container.prepend(element);
  }
}

export default Section;