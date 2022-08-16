//Define where the questions will appear on html
const flashDeck = document.getElementById('flashDeck_div');
flashDeck.innerHTML+= 'Are you ready?'+ '<br>';

class quizQ {
  //Define name of value pairs in quizQ objects
  constructor(question, answer) {
    this.question = question;
    this.answer = question;
    this.correct = false;
  }
}
  
// define empty array for flashcards
let myFlashcard = [];

//add objects to flashcard array
myFlashcard.push(new quizQ('What sport are the Steelers?', 'football'));
myFlashcard.push(new quizQ('What sport are the Penguins?', 'hockey'));
myFlashcard.push(new quizQ('What sport are the Pirates?', 'baseball'));
myFlashcard.push(new quizQ('What sport are the Riverhouse SC?', 'soccer'));
myFlashcard.push(new quizQ('What sport are the Pittsburgh Forge?', 'rugby'));

//prints the entire question and answers on click
document.querySelector('html').onclick=function(){
 let i = 0;
    while (i < myFlashcard.length)  {
      flashDeck.innerHTML+=(myFlashcard[i].question +'<br>');
      ++i;
    }
}
