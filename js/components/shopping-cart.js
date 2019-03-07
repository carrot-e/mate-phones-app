import BaseComponent from './base-component.js';

class ShoppingCart extends BaseComponent {
  _render() {
    this._element.innerHTML = `
      <section>
        <p>Shopping Cart</p>
        <ul>
          <li>Phone 1</li>
          <li>Phone 2</li>
          <li>Phone 3</li>
        </ul>
      </section>
    `;
  }
}

export default ShoppingCart;
