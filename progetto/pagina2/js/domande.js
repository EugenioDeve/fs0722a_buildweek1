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

// creato array vuoto
var totalAnswers = [];

// ciclo domande per prender quelle sbagliate e giuste e le metto dentro un nuovo array
for (let qs of questions) {
  qs.totalAnswers = [...qs.incorrect_answers, qs.correct_answer];
  console.log(qs.totalAnswers);
}

//appiccio la prima domanda dall'array alla prima "legend" vuota
let domande1 = document.querySelector(".domande1");
let leggenda1 = document.querySelector("#legend");
leggenda1.innerHTML = questions[0].question;

// creo sezione per il primo set di domande
/*
for (let i = 0; i < 4; i++) {
  let domanda = document.createElement("p");
  domanda.textContent = questions[0].totalAnswers[i];
  domande1.appendChild(domanda);
}
*/

var domanda11 = document.querySelector("#domanda11");
domanda11.innerHTML = questions[0].totalAnswers[0];
let domanda12 = document.querySelector("#domanda12");
domanda12.innerHTML = questions[0].totalAnswers[1];
let domanda13 = document.querySelector("#domanda13");
domanda13.innerHTML = questions[0].totalAnswers[2];
let domanda14 = document.querySelector("#domanda14");
domanda14.innerHTML = questions[0].totalAnswers[3];

function check1() {
  let btn1 = document.querySelector("#q11");
  let domanda111 = document.querySelector("#div1");

  domanda111.addEventListener("click", function () {
    btn1.checked = true;

    if (btn1.checked == true) {
      console.log("checked1");
    }
  });
}
check1();

function check2() {
  let btn2 = document.querySelector("#q12");
  let domanda112 = document.querySelector("#div2");

  domanda112.addEventListener("click", function () {
    btn2.checked = true;

    if (btn2.checked == true) {
      console.log("checked2");
    }
  });
}
check2();

function check3() {
  let btn3 = document.querySelector("#q13");
  let domanda113 = document.querySelector("#div3");

  domanda113.addEventListener("click", function () {
    btn3.checked = true;

    if (btn3.checked == true) {
      console.log("checked3");
    }
  });
}
check3();

function check4() {
  let btn4 = document.querySelector("#q14");
  let domanda114 = document.querySelector("#div4");

  domanda114.addEventListener("click", function () {
    btn4.checked = true;

    if (btn4.checked == true) {
      console.log("checked4");
    }
  });
}
check4();
