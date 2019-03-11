import BaseComponent from './base-component.js';
import Gallery from './gallery.js';

class ProductItem extends BaseComponent {
  set item(phone) {
    this._item = phone;
    this._render();
    this._addListeners();
    this._initComponents();
  }

  _render() {
    if (this._item === undefined) {
      return;
    }

    this._element.innerHTML = `
      <div>
        <button data-action="back">Back</button>
        <button data-action="add-to-cart">Add to cart</button>
    
    
        <h1>${this._item.name}</h1>
    
        <p>${this._item.description}</p>
        
        <div data-component="gallery"></div>
    
        <ul class="specs">
          <li>
            <span>Availability and Networks</span>
            <dl>
              <dt>Availability</dt>
              <dd></dd>
            </dl>
          </li>
          <li>
            <span>Battery</span>
            <dl>
              <dt>Type</dt>
              <dd>${this._item.battery.type}</dd>
              <dt>Talk Time</dt>
              <dd>${this._item.battery.talkTime}</dd>
              <dt>Standby time (max)</dt>
              <dd>${this._item.battery.standbyTime}</dd>
            </dl>
          </li>
          <li>
            <span>Storage and Memory</span>
            <dl>
              <dt>RAM</dt>
              <dd>${this._item.storage.ram}</dd>
              <dt>Internal Storage</dt>
              <dd>${this._item.storage.flash}</dd>
            </dl>
          </li>
          <li>
            <span>Connectivity</span>
            <dl>
              <dt>Network Support</dt>
              <dd></dd>
              <dt>WiFi</dt>
              <dd>${this._item.connectivity.wifi}</dd>
              <dt>Bluetooth</dt>
              <dd>${this._item.connectivity.bluetooth}</dd>
              <dt>Infrared</dt>
              <dd>${this._item.connectivity.infrared ? '✓' : '✘'}</dd>
              <dt>GPS</dt>
              <dd>${this._item.connectivity.gps ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Android</span>
            <dl>
              <dt>OS Version</dt>
              <dd>${this._item.android.os}</dd>
              <dt>UI</dt>
              <dd>${this._item.android.ui}</dd>
            </dl>
          </li>
          <li>
            <span>Size and Weight</span>
            <dl>
              <dt>Dimensions</dt>
              ${this._item.sizeAndWeight.dimensions
                .map(dimension => `<dd>${dimension}</dd>`)
                .join('')}
              <dt>Weight</dt>
              <dd>${this._item.sizeAndWeight.weight}</dd>
            </dl>
          </li>
          <li>
            <span>Display</span>
            <dl>
              <dt>Screen size</dt>
              <dd>${this._item.display.screenSize}</dd>
              <dt>Screen resolution</dt>
              <dd>${this._item.display.screenResolution}</dd>
              <dt>Touch screen</dt>
              <dd>${this._item.display.touchScreen ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Hardware</span>
            <dl>
              <dt>CPU</dt>
              <dd>${this._item.hardware.cpu}</dd>
              <dt>USB</dt>
              <dd>${this._item.hardware.usb}</dd>
              <dt>Audio / headphone jack</dt>
              <dd>${this._item.hardware.audioJack}</dd>
              <dt>FM Radio</dt>
              <dd>${this._item.hardware.fmRadio ? '✓' : '✘'}</dd>
              <dt>Accelerometer</dt>
              <dd>${this._item.hardware.accelerometer ? '✓' : '✘'}</dd>
            </dl>
          </li>
          <li>
            <span>Camera</span>
            <dl>
              <dt>Primary</dt>
              <dd>${this._item.camera.primary}</dd>
              <dt>Features</dt>
              <dd>${this._item.camera.features.join(', ') || 'None'}</dd>
            </dl>
          </li>
          <li>
            <span>Additional Features</span>
            <dd>${this._item.additionalFeatures}</dd>
          </li>
        </ul>
      </div>
    `;
  }

  _addListeners() {
    this._element.querySelector('[data-action="back"]')
      .addEventListener('click', () => {
          this._parent.phoneDeselected();
        }
      );
  }

  _initComponents() {
    this._gallery = new Gallery({
      element: this._element.querySelector('[data-component="gallery"]'),
      item: this._item,
    });
  }

}

export default ProductItem;
