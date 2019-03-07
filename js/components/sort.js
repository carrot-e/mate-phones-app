import BaseComponent from './base-component.js';

class Sort extends BaseComponent {
  _render() {
    this._element.innerHTML = `
      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    `;
  }
}

export default Sort;
