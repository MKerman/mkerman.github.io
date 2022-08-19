//import function to get database root, sets a location & update the value

import {getDatabase, ref, set, update, child, get, onValue, remove } from
"https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

//Get pointer to database root
const db = getDatabase();

//make database point to location root -> deck -> flashcards

//create reference location
const dbLocation = {};

//store myFlashcards under flashcards in the database
dbLocation['/deck/flashcards/'] = myFlashcards;

//specify location in the dtabase tree
update (ref(db), dbLocation);
