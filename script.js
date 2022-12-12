let questions = [
    {
  "question": "Wer hat Javascript erfunden?",
  "answer_1": "Marvin Cordes",
  "answer_2": "Frank Felger",
  "answer_3": "Brendan Eich",
  "answer_4": "Julius Cesar",
  "right_answer": 3
    },
        {
  "question": "Wofür wird NodeJS verwendet?",
  "answer_1": "Um Würstchen zu braten.",
  "answer_2": "Um Backend mit Javascript zu programmieren.",
  "answer_3": "Um den Passierschein A38 zu bekommen.",
  "answer_4": "Um jede Frau damit zu beeindrucken.",
  "right_answer": 2
    },
        {
  "question": "Wie definiere ich ein Array in Javascript?",
  "answer_1": "Mit []",
  "answer_2": "In dem ich meinen Computer anschreie.",
  "answer_3": "Mit ()",
  "answer_4": "Was ist ein Array?",
  "right_answer": 1
    },
        {
  "question": "Mit welcher Sprache werden die meisten Spiele entwickelt?",
  "answer_1": "Mit Python",
  "answer_2": "Mit Windows-Batch",
  "answer_3": "Mit C#",
  "answer_4": "Mit TrumpScript",
  "right_answer": 3
    }
];

let currentQuestion = 0;


function render(){
document.getElementById('questionLength').innerHTML = questions.length;
showQuestion()
}


function showQuestion(){
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selectedAnswer){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selectedAnswer.slice(-1);

    if(selectedQuestionNumber == question['right_answer']){
        alert('Richtig!')
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success');
    }else{
        alert('Falsch!')
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-fail');
    }
}
