const qContainer   = document.getElementById("question-container")
const startBtn = document.getElementById("start_btn")
const choices = document.getElementById("choices")
const nextQuestion = document.getElementById("next_question") //search

let scoreTally = document.getElementById("score")
let count , score = 0;

//add event listener to load API once user clicks
startBtn.addEventListener('click',  async() => {
   let response = await axios.get("https://opentdb.com/api.php?amount=1&difficulty=easy")
   //console.log(response)
    startBtn.hidden = "true"

     refreshQuestions()
     count ++
    //access html element to display question
    let question = document.getElementById("questions")
    question.innerHTML = response.data.results[0].question
    //console.log(question)
    

    let correctAnswer = response.data.results[0].correct_answer
    //console.log(correctAnswer)
    
    let wrongAnswers = response.data.results[0].incorrect_answers
    //console.log(wrongAnswers)
   
    let randomChoice = wrongAnswers
    let randomNumber = Math.floor(Math.random() * 3)    
    //console.log(correctAnswer)
    randomChoice.splice(randomNumber, 0, correctAnswer)

    for(let i = 0; i< randomChoice.length; i++){
        let button = document.createElement("text")
        button.innerHTML = randomChoice[i]
        button.className = "btn"        
        choices.append(button)
        
        
    }     
    
        // count++
    choices.addEventListener("click", e => {
        //console.log(e.target)
        
        //assign text clicked and compare to correct answer
        let userChoice = e.target
       
        // console.log(correctAnswer)
        // console.log(userChoice)
      
        if (userChoice.innerHTML === correctAnswer){
            // console.log("correct")
            alert("Correct Answer")    
            score++        
            scoreTally.textContent = score

        }
        else{
            console.log("incorrect")
            alert("Incorrect Answer")
        }           
    
    }) 

    startBtn.innerHTML = "Next Question"
    startBtn.hidden = false;   

 })
 
    // if(count >= 9){
    //     score = 0;
    //     startBtn.innerHTML = "Play Again"
    // }

 
//  refreshQuestions()
function refreshQuestions(){
 while (choices.firstChild){
    choices.removeChild(choices.firstChild)
}

}



