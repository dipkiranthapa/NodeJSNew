  // 2 QUESTIONS ONLY
    let questions = [
        {
            question: "1. What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Home Tool Markup Language",
                "Hyper Tool Multi Language"
            ],
            answer: 0   // correct option index
        },
        {
            question: "2. Which keyword is used to create a loop?",
            options: [
                "if",
                "else",
                "for",
                "var"
            ],
            answer: 2
        }
    ];

    let quizDiv = document.getElementById("quiz");

    // SHOW QUESTIONS (FOR LOOP)
    for (let i = 0; i < questions.length; i++) {
        quizDiv.innerHTML += `
            <p>${questions[i].question}</p>

            <input type="radio" name="q${i}" value="0">
            ${questions[i].options[0]} <br>

            <input type="radio" name="q${i}" value="1">
            ${questions[i].options[1]} <br>

            <input type="radio" name="q${i}" value="2">
            ${questions[i].options[2]} <br>

            <input type="radio" name="q${i}" value="3">
            ${questions[i].options[3]} <br><br>
        `;
    }

    function submitQuiz() {
        let score = 0;

        // CHECK ANSWERS
        for (let i = 0; i < questions.length; i++) {
            let selected = document.querySelector(
                `input[name="q${i}"]:checked`
            );

            if (selected && Number(selected.value) === questions[i].answer) {
                score++;
            }
        }

        document.getElementById("result").innerText =
            "Your Score: " + score + " / " + questions.length;
    }