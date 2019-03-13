class BaseComponent {
  constructor({element, eventEmitter}) {
    this._element = element;
    this._eventEmitter = eventEmitter;

    this._render();
  }

  _render() {
  }

  show() {
    this._element.hidden = false;
  }

  hide() {
    this._element.hidden = true;
  }
}

export default BaseComponent;
