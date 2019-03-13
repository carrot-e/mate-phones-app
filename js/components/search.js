import BaseComponent from './base-component.js';
import { debounce } from '../services/helpers.js';

class Search extends BaseComponent {
  _render() {
    this._element.innerHTML = `
      <p>
        Search:
        <input>
      </p>
    `;

    this.addListeners();
  }

  addListeners() {
    const handler = (event) => {
      this._eventEmitter.emit('searchUpdated', event.target.value);
    };

    this._element.querySelector('input')
      .addEventListener('input', debounce(handler));
  }
}

export default Search;
