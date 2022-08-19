//import function to get database root, sets a location & update the value

import {getDatabase, ref, set, update, child, get, onValue, remove } from
"https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

//creat new flashcards

let myFlashcards = [ {
  "question": "What type of color is the building block for other colors?",
  "image": "none",
  "answer": "primary colors"
   },
   {
   "question": "What colors do you get when you mix the primary colors together?",
   "image"   : "none",
   "answer"  : "secondary colors"  
   },
   {
   "question": "What is the tool called to visualize the relationship between colors",
   "image"   : "none",
   "answer"  : "color wheel" 
   }  
];

//Get pointer to database root
const db = getDatabase();

//make database point to location root -> deck -> flashcards

//create reference location
const dbLocation = {};

//store myFlashcards under flashcards in the database
dbLocation['/deck/flashcards/'] = myFlashcards;

//specify location in the database tree
update (ref(db), dbLocation);
