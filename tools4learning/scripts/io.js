//import function to get database root, sets a location & update the value

import { getDatabase, ref, set, update, child, get, onValue, remove
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

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

//point to database root
const db = getDatabase ();

//make database point to a specificl location (either existing or new)
const dbLocation = {};

//ovewrite or write myFlashcards stored under flashcards in the database
dbLocation['/deck/flashcards/'] = myFlashcards;

//specify location in the database tree
update (ref(db), dbLocation);
