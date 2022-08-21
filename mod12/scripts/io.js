// import function to get database root, set a location and update the values

import { getDatabase, ref, set, update, child, get, onValue, remove
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


let myFlashcards = [{
		"question": "What are primary colors?",
		"answer": "Red, Yellow, Blue"
	},
	{
		"question": "What are secondary colors?",
		"answer": "Orange, Green, Purple"
	},
	{
		"question": "What are tertiary colors?",
		"answer": "red-purple, blue-green and yellow-green"
	}
];

//point to database root
const db = getDatabase ();

//make database point to location root & if location does not exist creat it

const dbLocation = {};

//write-overwrite 
dbLocation['/deck/flashcards/'] = myFlashcards;

//specify a location in database tree
update (ref(db), dbLocation);
