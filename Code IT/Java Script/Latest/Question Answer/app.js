const quiz = [
  {
    question: "नेपालको सबैभन्दा ठूलो दल कुन बन्न सक्छ",
    options: [
      "Nepali Congress",
      "Nepali Communist Party",
      "CPN-UML",
      "Rastriya Swatantra Party",
    ],
    answer: "Nepali Communist Party",
  },

  {
    question: "अनुमान लाउनु होस् कुन पार्टीले कति सिट जित्छ ।?",
    options: [
      "Nepali Congress ",
      "Nepali Communist Party",
      "CPN-UML",
      "Rastriya Swatantra Party",
    ],
    answer: "Nepali Communist Party",
  },

  // {
  //   question: "यस पालिको चुनावमा हारेमा कुन पार्टी कोमा पुग्छ ?",
  //   options: [
  //     "Nepali Congress",
  //     "Nepali Communist Party",
  //     "CPN-UML",
  //     "Rastriya Swatantra Party",
  //   ],
  //   answer: "Rastriya Swatantra Party",
  // },
];

let index = 0;
let score = 0;

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".btn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreText = document.getElementById("score");

// function loadQuiz() {
//   question.innerText = quiz[index].question;

//   buttons.forEach((btn, i) => {
//     btn.innerText = quiz[index].options[i];
//     btn.classList.remove("correct", "wrong");
//   });

//   scoreText.innerText = "Score: " + score;
// }

// buttons.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     if (btn.innerText === quiz[index].answer) {
//       btn.classList.add("correct");
//       score++;
//     } else {
//       btn.classList.add("wrong");
//     }
//   });
// });

// nextBtn.addEventListener("click", function () {
//   index++;

//   if (index < quiz.length) {
//     loadQuiz();
//   } else {
//     question.innerText = "Quiz Finished!";
//     scoreText.innerText = "Final Score: " + score;
//   }
// });

// restartBtn.addEventListener("click", function () {
//   index = 0;
//   score = 0;

//   loadQuiz();
// });

// loadQuiz();
