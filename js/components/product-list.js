import BaseComponent from './base-component.js';

class ProductList extends BaseComponent {
  constructor(params) {
    super(params);

    this._products = params.products;
    this._render();
  }

  _render() {
    if (this._products === undefined) {
      return;
    }

    const lis = [];

    for (let i = 0; i < this._products.length; i++) {
      lis.push(`
        <li class="thumbnail">
          <a href="#" data-product-id="${this._products[i].id}" class="thumb">
            <img alt="${this._products[i].name}" src="${this._products[i].imageUrl}">
          </a>
          <a href="#" data-product-id="${this._products[i].id}">${this._products[i].name}</a>
          <p>${this._products[i].snippet}</p>
        </li>`
      );
    }

    this._element.innerHTML = `
      <ul class="phones">
        ${lis.join('')}
      </ul>
    `;

    this._addListeners();
  }

  set products(products) {
    this._products = products;
    this._render();
  }

  _addListeners() {
    this._element.querySelector('.phones')
      .addEventListener('click', (event) => {
        if (event.target.closest('a') !== null) {
          event.preventDefault();

          this._eventEmitter.emit('phoneSelected', event.target.closest('a').dataset.productId);
        }
      });
  }
}

export default ProductList;
