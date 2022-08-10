document.body.innerHTML+='Are you up for the challenge?';
class quizQ {
  // Define names for value pairs in quizQ objects
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;

   } 
 
}
// define empty array for flaschards
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
document.body.innerHTML+=myFlashcard[i].question + '<br/> ' + myFlashcard[i].answer + '<br/>';
++i;

}
