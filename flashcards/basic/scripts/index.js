//Define where the questions will appear on html
const flashDeck = document.getElementById('flashDeck_div');
flashDeck.innerHTML+= 'Are you ready?'+ '<br>';
let questionCounter = 0;
let questionDisplayed = false;

class quizQ {
  //Define name of value pairs in quizQ objects
  constructor(question, answer, answphoto) {
    this.question = question;
    this.answer = answer;
    this.answphoto = answphoto;
    this.correct = false;
  }
}
  
// define empty array for flashcards
let myFlashcard = [];

//add objects to flashcard array
myFlashcard.push(new quizQ('What sport are the Steelers?', 'football', 'https://images.pexels.com/photos/2570139/pexels-photo-2570139.jpeg?cs=srgb&dl=pexels-jeandaniel-francoeur-2570139.jpg&fm=jpg'));
myFlashcard.push(new quizQ('What sport are the Penguins?', 'hockey', 'https://images.pexels.com/photos/6847470/pexels-photo-6847470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));
myFlashcard.push(new quizQ('What sport are the Pirates?', 'baseball', 'https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?cs=srgb&dl=pexels-steshka-willems-1661950.jpg&fm=jpg'));
myFlashcard.push(new quizQ('What sport are the Riverhouse SC?', 'soccer', 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?cs=srgb&dl=pexels-markus-spiske-114296.jpg&fm=jpg'));
myFlashcard.push(new quizQ('What sport are the Pittsburgh Forge?', 'rugby', 'https://images.pexels.com/photos/5116575/pexels-photo-5116575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));

//prints the entire question and answers on click
document.querySelector('html').onclick=function(){
  //resets flashDeck to display only the question on click
  if (questionDisplayed === false) {
      flashDeck.innerHTML=(myFlashcard[questionCounter].question +'<br>');
     
      //reset questionDisplayed
      questionDisplayed = true;
      }
 else  { // display answer 
      flashDeck.innerHTML+=('<br> '+ myFlashcard[questionCounter].answer +'<br>');
      //display coresponding image for answer
       flashDeck.innerHTML+=('<img src=\'' + myFlashcard[questionCounter].answphoto +'\' width=50%>')
      //reset questionDisplayed
      questionDisplayed = false;
      //increment question counter
      questionCounter++;
 }
}


    
