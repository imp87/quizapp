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
let correctAnswers = 0

let AUDIO_SUCCESS = new Audio('sound/right.mp3');
let AUDIO_FAIL = new Audio('sound/wrong.mp3');
AUDIO_SUCCESS.volume = 0.2;
AUDIO_FAIL.volume = 0.2;


function render(){
document.getElementById('questionLength').innerHTML = questions.length;
showQuestion()
}


function showQuestion(){

    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);

    if(currentQuestion >= questions.length){
        document.getElementById('endScreen').style = '';
        document.getElementById('quizBody').style = 'display: none;';
        document.getElementById('quizHeader').style = 'display: none;'
        document.getElementById('totalQuestions').innerHTML = questions.length;
        document.getElementById('correctAnswers').innerHTML = correctAnswers;
        document.getElementById('progress-bar').innerHTML = `${percent}%`
        document.getElementById('progress-bar').style = `width: ${percent}%;`
    }else{

        document.getElementById('progress-bar').innerHTML = `${percent}%`
        document.getElementById('progress-bar').style = `width: ${percent}%;`

        console.log(percent)

    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('currentQuestionNumber').innerHTML = currentQuestion + 1;
    }
}

function answer(selectedAnswer){

    if(currentQuestion >= questions.length){

    }else{
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selectedAnswer.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if(selectedQuestionNumber == question['right_answer']){
        AUDIO_SUCCESS.play();
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-success');
        correctAnswers++
    }else{
        AUDIO_FAIL.play();
        document.getElementById(selectedAnswer).parentNode.classList.add('bg-fail');
        document.getElementById(selectedAnswer).parentNode.classList.remove('quiz-answer-card');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-Button').disabled = false;
    }
}
function removeClasslist(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-fail');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-fail');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-fail');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-fail');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}

function nextQuestion(){
    document.getElementById('next-Button').disabled = true;
    currentQuestion++
    showQuestion()
    removeClasslist()
}

function restartGame(){
    correctAnswers = 0
    currentQuestion = 0;
    document.getElementById('endScreen').style = 'display: none;';
    document.getElementById('quizBody').style = '';
    document.getElementById('quizHeader').style = '';
    render();
}