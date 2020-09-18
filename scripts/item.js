function validateName (name = null) {
if (!name.length) throw new TypeError('Name must not be blank');
}

class Item {
    constructor (name) {
        this.id = cuid(),
        this.name = name,
        this.checked = false
    }
}
export default {
    validateName,
    Item
};