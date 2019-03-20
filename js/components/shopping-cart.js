import BaseComponent from './base-component.js';

class ShoppingCart extends BaseComponent {
  constructor(params) {
    super(params);

    this._cart = [];

    this._eventEmitter.subscribe('addedToCart', (item) => {
      this.addItem(item);
    });
  }

  addItem(item) {
    const product = this._cart.filter(productItem => productItem.data.name === item.name);

    if (product.length === 0) {
      this._cart.push({
        data: item,
        count: 1,
      });
    } else {
      product[0].count++;
    }

    this._render();
  }

  _render() {
    if (this._cart === undefined) {
      return;
    }
    this._element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          ${this._cart.map(item => `<li>${item.data.name} ${item.count === 1 ? '' : `(x${item.count})`}</li>`)
    .join('')}
        </ul>
      </section>
    `;
  }
}

export default ShoppingCart;
