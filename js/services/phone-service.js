import phones from '../../phones/phones.js';

class PhoneService {
    static getAll() {
        return phones;
    }

    static getFiltered(query) {
        return phones.filter(phone => {
            return phone.name.toLowerCase().includes(query.toLowerCase());
        });
    }

    static async getPhone(id) {
        return (await import(`../../phones/${id}.js`)).default;
    }

    static getSorted(key) {
        if (key === 'age') {
            return phones.sort(function (a, b) {
                return a.age - b.age;
            });
        }

        if (key === 'name') {

            return phones.sort(function (a, b){
                if (a.name < b.name) {
                    return -1;
                }

                if (a.name > b.name) {
                    return 1;
                }

                return 0;
            });
        }
    }
}

export default PhoneService;
