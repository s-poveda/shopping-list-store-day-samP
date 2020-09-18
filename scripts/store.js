import item from "./item.js";
let items = [];
const hideCheckedItems = false;

function findById (id) {
  return items.find( item => item.id == id);
};
//^^^^^^^^^^^^^^^^^ why?????? 'this' breaks it.

function findAndUpdateName (id, newName) {
    try {
        findById(id).name = newName;
    } catch (e) {
        console.log(`Cannot update name: ${e.message}`);
        console.trace()
    }
}

function addItem (name) {
  item.validateName(name);
  try {
    item.validateName(name);
    this.items.push(new item.Item(name));
  } catch (e) {
    console.log(`Cannot add item: ${e.message}`);
  }
};

function findAndDelete (id) {
    this.items = this.items.filter((item) => item.id !== id);
};

function findAndToggleChecked (id) {
    const item = this.findById(id)
    item.checked = !item.checked;
}

function toggleCheckedFilter () {
    this.hideCheckedItems = !this.hideCheckedItems
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndUpdateName,
  findAndDelete,
  findAndToggleChecked,
  toggleCheckedFilter
};
