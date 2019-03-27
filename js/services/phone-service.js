import phones from '../../phones/phones.js';

class PhoneService {
  static getAll() {
    return fetch('https://mate-academy.github.io/phone-catalogue-static/api/phones.json')
      .then(response => response.json());
  }

  static getFiltered(query) {
    return phones.filter(phone => {
      return phone.name.toLowerCase().includes(query.toLowerCase());
    });
  }

  static getPhone(id) {
    return import(`../../phones/${id}.js`)
      .then(response => response.default);
  }
}

export default PhoneService;
