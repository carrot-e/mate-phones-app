import BaseComponent from './base-component.js';

class Sort extends BaseComponent {
    constructor(params) {
        super(params);

        this._parent = params.parent;
    }

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

        this.addListeners();
    }

    addListeners() {
        this._element.querySelector('select')
            .addEventListener('change', (event) => {
                        this._parent.sortUpdated(event.currentTarget.value);
                    });
            }
    }


export default Sort;
