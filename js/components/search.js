import BaseComponent from './base-component.js';

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
    this._element.querySelector('input')
      .addEventListener('input', (event) => {
          this._parent.searchUpdated(event.currentTarget.value);
        }
      );
  }
}

export default Search;
