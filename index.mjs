//import {esm} from "npm";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js"
import { getDatabase,ref} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js"


const appSettings = {
    databaseURL: "https://playground-d2f4d-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref (database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")


addButtonEl.addEventListener("click" , function () {
    let inputValue = inputFieldEl.value
    console.log(inputValue)
});