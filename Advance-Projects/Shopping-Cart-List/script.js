import {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
  databaseURL: 'https://shopping-cart-list-36406-default-rtdb.firebaseio.com/',
};

const app = initializeApp (appSettings);
const database = getDatabase (app);
const shoppingListInDB = ref (database, 'shoppingList');

const inputFieldEl = document.getElementById ('input-field');
const btn = document.getElementById ('add-button');
const shoppingListEl = document.getElementById ('shopping-list');

const clearInputField = () => {
  inputFieldEl.value = '';
};

const clearShoppingListEl = () => {
  shoppingListEl.innerHTML = '';
};

const addItemToShoppingList = item => {
  // shoppingListEl.innerHTML += `<li>${itemValue}</li>`; //Not an efficient way of replacing value
  let itemId = item[0];
  let itemValue = item[1];
  let newEl = document.createElement ('li');
  newEl.textContent = itemValue;

  newEl.addEventListener ('click', function () {
    let exactLocationOfItemInDB = ref (database, `shoppingList/${itemId}`);
    remove (exactLocationOfItemInDB);
  });

  shoppingListEl.append (newEl);
};

btn.addEventListener ('click', () => {
  let inputValue = inputFieldEl.value;
  push (shoppingListInDB, inputValue);
  clearInputField ();
});

// onValue function Calls when there is change in the database
onValue (shoppingListInDB, function (snapshot) {

  if(snapshot.exists()){
    let itemsArray = Object.entries(snapshot.val());
    clearShoppingListEl();
    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      // let currentItemID = currentItem[0];
      // let currentItemValue = currentItem[1];
      addItemToShoppingList(currentItem);
    }
  }
  else{
    shoppingListEl.innerHTML = "No Items here...yet!!"
  }
});
