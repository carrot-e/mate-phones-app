import BaseComponent from './base-component.js';
import PhoneService from '../services/phone-service.js';
import ProductItem from './product-item.js';
import Products from './products.js';

class Page extends BaseComponent {
  constructor(params) {
    super(params);

    this._initComponents();

    this._eventEmitter.subscribe('phoneDeselected', () => this.phoneDeselected());
    this._eventEmitter.subscribe('phoneSelected', phoneId => this.phoneSelected(phoneId));
  }

  _render() {
    this._element.innerHTML = `
      <div class="container-fluid">
        <div data-component="products"></div>
        <div hidden class="row" data-component="product-item"></div>
      </div>
    `;
  }

  _initComponents() {
    this._products = new Products({
      element: this._element.querySelector('[data-component="products"]'),
      eventEmitter: this._eventEmitter,
    });

    this._productItem = new ProductItem({
      element: this._element.querySelector('[data-component="product-item"]'),
      eventEmitter: this._eventEmitter,
    });
  }

  async phoneSelected(phoneId) {
    this._products.hide();
    this._productItem.show();

    this._productItem.item = await PhoneService.getPhone(phoneId);
  }

  phoneDeselected() {
    this._products.show();
    this._productItem.hide();
  }
}

export default Page;
