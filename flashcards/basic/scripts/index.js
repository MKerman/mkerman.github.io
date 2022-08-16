//define where the questions will appear on html
const flashDeck = document.getElementById('flashDeck_div');
flashDeck.innerHTML+= 'Are you ready?';

//create class for objects
class quizQ {
  // Define names for value pairs in quizQ objects
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
    this.correct = false;
   } 
 
}
// define empty array for myFlaschards
let myFlashcard = []; 

//add objects to flashcard array
myFlashcard.push(new quizQ('What sport are the Steelers?', 'football'));
myFlashcard.push(new quizQ('What sport are the Penguins?', 'hockey'));
myFlashcard.push(new quizQ('What sport are the Pirates?', 'baseball'));
myFlashcard.push(new quizQ('What sport are the Riverhouse SC?', 'soccer'));
myFlashcard.push(new quizQ('What sport are the Pittsburgh Forge?', 'rugby'));

//create loop to print question pairs
let i=0;
while(i<myFlashcard.length){
flashDeck.innerHTML+=myFlashcard[i].question + '<br/> ' + myFlashcard[i].answer + '<br/>';
++i;

}

