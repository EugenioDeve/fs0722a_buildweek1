// variabile counter a zero! che aumentera
let correct = 0;
// variabile counter a zero che aumentera
let wrong = 0;

// indice per vedere in che domanda siamo
let currentQuestion = 0;

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// query selector di id bottoni e titolo

const questionTitle = document.getElementById("question-title");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");
const answer4 = document.getElementById("answer4");

// funzione per aggiornare la grafica in funzione del numbero della domanda
// quando la lanci prende la domanda corente nell'array e rimpiazza i valori nell'html

const changeQuestion = () => {
  const curreQuestion = questions[currentQuestion];
  const totalAnswers = [
    ...curreQuestion.incorrect_answers,
    curreQuestion.correct_answer,
  ];
  console.log(totalAnswers);
  // se booleano solo due risposte
  if (curreQuestion.type === "boolean") {
    answer1.innerHTML = totalAnswers[0];
    answer2.innerHTML = totalAnswers[1];
    answer3.style.display = "none";
    answer4.style.display = "none";
  } else {
    // se multiple 4 risposte
    answer1.innerHTML = totalAnswers[0];
    answer2.innerHTML = totalAnswers[1];
    answer3.innerHTML = totalAnswers[2];
    answer4.innerHTML = totalAnswers[3];
    answer3.style.display = "block";
    answer4.style.display = "block";
  }
};

changeQuestion();

const checkAnswer = (event) => {
  // prendi uello che è contenuto nel div che hai cliccato
  const clickedAnswer = event.target.textContent;
  // prendi la domanda su cui sei fermo ora
  const currQuestion = questions[currentQuestion];
  // controlla se quella giusta
  if (currentQuestion.correct_answer === clickedAnswer) {
    // risposta esatto
    correct++;
    // risposta errata
  } else wrong++;
};

// timer countdown
const countdownNumberEl = document.getElementById("countdown-number");
let countdown = 30;

countdownNumberEl.textContent = countdown;

setInterval(function () {
  countdown = --countdown <= 0 ? 30 : countdown;

  countdownNumberEl.textContent = countdown;
}, 1000);
