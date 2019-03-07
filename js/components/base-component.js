class BaseComponent {
  constructor({element, parent}) {
    this._element = element;
    this._parent = parent;

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
