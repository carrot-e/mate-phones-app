import BaseComponent from './base-component.js';

export default class Gallery extends BaseComponent {
  constructor(params) {
    super(params);

    this._item = params.item;
    this._render();
    this._addListeners();
  }

  _render() {
    if (this._item === undefined) {
      return;
    }

    this._element.innerHTML = `
      <img class="phone" src="${this._item.images[0]}">

      <ul class="phone-thumbs">
        ${this._item.images.reduce((acc, image) => {
          acc += `<li><img src="${image}"></li>`;
          return acc;
        }, '')}
      </ul>
    `;
  }

  _addListeners() {
    this._element.querySelector('.phone-thumbs')
      .addEventListener('click', (event) => {
        const img = event.target.closest('img');
        if (img === null) {
          return;
        }

        this._element.querySelector('.phone').src = img.src;
    });
  }
}
