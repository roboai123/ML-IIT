const questions = [
    {
        question: "A body is moving with a velocity of 20 m/s. If its velocity becomes 30 m/s in 5 seconds, what is its acceleration?",
        options: [
            "1 m/s²",
            "2 m/s²",
            "5 m/s²",
            "10 m/s²"
        ],
        answer: 1,
        explanation: "Acceleration = (Final velocity − Initial velocity) / Time.",
        mistake: "You need to subtract the initial velocity from the final velocity before dividing by time.",
        solution: "a = (30 − 20) / 5 = 10 / 5 = 2 m/s²."
    },

    {
        question: "What is the derivative of x² with respect to x?",
        options: [
            "x",
            "2x",
            "x²",
            "2"
        ],
        answer: 1,
        explanation: "Using the power rule, d(xⁿ)/dx = n xⁿ⁻¹.",
        mistake: "You may have forgotten to multiply by the power of x.",
        solution: "d(x²)/dx = 2x¹ = 2x."
    },

    {
        question: "Which element has the atomic number 1?",
        options: [
            "Helium",
            "Oxygen",
            "Hydrogen",
            "Carbon"
        ],
        answer: 2,
        explanation: "Atomic number represents the number of protons in an atom.",
        mistake: "Remember that hydrogen is the first element in the periodic table.",
        solution: "Hydrogen has one proton, so its atomic number is 1."
    },

    {
        question: "If 2x + 6 = 14, what is the value of x?",
        options: [
            "2",
            "4",
            "6",
            "8"
        ],
        answer: 1,
        explanation: "Subtract 6 from both sides and then divide by 2.",
        mistake: "You may have forgotten to divide the remaining value by 2.",
        solution: "2x + 6 = 14 → 2x = 8 → x = 4."
    },

    {
        question: "Which law states that every action has an equal and opposite reaction?",
        options: [
            "Newton's First Law",
            "Newton's Second Law",
            "Newton's Third Law",
            "Law of Gravitation"
        ],
        answer: 2,
        explanation: "Newton's Third Law describes action and reaction forces.",
        mistake: "The First Law describes inertia, while the Second Law relates force, mass and acceleration.",
        solution: "Newton's Third Law: For every action, there is an equal and opposite reaction."
    }
];

let currentQuestion = 0;
let userAnswers = Array(questions.length).fill(null);
let timeLeft = 300;
let timerInterval;

function startTest() {

    document.getElementById("home").classList.add("hidden");
    document.getElementById("subjects").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");

    document.getElementById("test").classList.remove("hidden");

    currentQuestion = 0;
    userAnswers = Array(questions.length).fill(null);
    timeLeft = 300;

    clearInterval(timerInterval);

    timerInterval = setInterval(updateTimer, 1000);

    loadQuestion();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("questionText").textContent =
        question.question;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const optionDiv = document.createElement("div");

        optionDiv.className = "option";

        optionDiv.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        if (userAnswers[currentQuestion] === index) {
            optionDiv.classList.add("selected");
        }

        optionDiv.onclick = function () {
            selectAnswer(index);
        };

        optionsContainer.appendChild(optionDiv);
    });

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    document.getElementById("previousBtn").style.visibility =
        currentQuestion === 0 ? "hidden" : "visible";

    document.getElementById("nextBtn").textContent =
        currentQuestion === questions.length - 1
            ? "Submit Test ✓"
            : "Next →";
}

function selectAnswer(index) {

    userAnswers[currentQuestion] = index;

    loadQuestion();
}

function nextQuestion() {

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishTest();
    }
}

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();
    }
}

function updateTimer() {

    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {

        clearInterval(timerInterval);

        finishTest();
    }
}

function finishTest() {

    clearInterval(timerInterval);

    let correct = 0;
    let wrong = 0;
    let unattempted = 0;

    questions.forEach((question, index) => {

        if (userAnswers[index] === null) {

            unattempted++;

        } else if (userAnswers[index] === question.answer) {

            correct++;

        } else {

            wrong++;
        }
    });

    const percentage =
        Math.round((correct / questions.length) * 100);

    document.getElementById("test").classList.add("hidden");

    document.getElementById("result").classList.remove("hidden");

    document.getElementById("percentage").textContent =
        `${percentage}%`;

    document.getElementById("correctCount").textContent =
        correct;

    document.getElementById("wrongCount").textContent =
        wrong;

    document.getElementById("unattemptedCount").textContent =
        unattempted;

    document.getElementById("score").textContent =
        `${correct} / ${questions.length}`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function showReview() {

    document.getElementById("result").classList.add("hidden");

    document.getElementById("review").classList.remove("hidden");

    const container =
        document.getElementById("reviewContainer");

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const userAnswer = userAnswers[index];

        const card = document.createElement("div");

        if (userAnswer === question.answer) {

            card.className = "review-card correct-review";

            card.innerHTML = `
                <h3>Question ${index + 1} — ✅ Correct</h3>
                <p><strong>Question:</strong> ${question.question}</p>
                <p><strong>Your answer:</strong> ${question.options[userAnswer]}</p>

                <div class="solution">
                    <strong>💡 Explanation</strong>
                    <p>${question.explanation}</p>
                </div>
            `;

        } else if (userAnswer === null) {

            card.className = "review-card";

            card.innerHTML = `
                <h3>Question ${index + 1} — ⚪ Unattempted</h3>
                <p><strong>Question:</strong> ${question.question}</p>

                <div class="solution">
                    <strong>✅ Correct Answer</strong>
                    <p>${question.options[question.answer]}</p>
                    <p>${question.solution}</p>
                </div>
            `;

        } else {

            card.className = "review-card";

            card.innerHTML = `
                <h3>Question ${index + 1} — ❌ Wrong</h3>

                <p><strong>Question:</strong> ${question.question}</p>

                <p>
                    <strong>Your answer:</strong>
                    ${question.options[userAnswer]}
                </p>

                <p>
                    <strong>Correct answer:</strong>
                    ${question.options[question.answer]}
                </p>

                <div class="mistake">
                    <strong>🔍 Where you made the mistake</strong>
                    <p>${question.mistake}</p>
                </div>

                <div class="solution">
                    <strong>💡 Correct Solution</strong>
                    <p>${question.solution}</p>
                </div>
            `;
        }

        container.appendChild(card);
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function goHome() {

    document.getElementById("review").classList.add("hidden");

    document.getElementById("home").classList.remove("hidden");
    document.getElementById("subjects").classList.remove("hidden");
    document.getElementById("about").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
