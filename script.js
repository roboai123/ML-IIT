const questions = [

    {
    question: "A particle starts from rest and moves with uniform acceleration. It covers 96 m in the first 8 s. Find the acceleration.",
    options: [
        "2 m/s²",
        "3 m/s²",
        "4 m/s²",
        "6 m/s²"
    ],
    answer: 1,
    explanation: "Use the equation s = ut + ½at² with u = 0.",
    mistake: "Using the velocity equation instead of the displacement equation.",
    solution: "96 = ½ × a × 8² = 32a ⇒ a = 3 m/s²."
    },
    {
    question: "A 5 kg block is pulled on a smooth horizontal surface by a constant force of 20 N for 10 m. The work done by the force is:",
    options: [
        "50 J",
        "100 J",
        "200 J",
        "400 J"
    ],
    answer: 2,
    explanation: "Work done = Force × Distance.",
    mistake: "Do not use mass in the work formula here.",
    solution: "W = 20 × 10 = 200 J."
},

{
    question: "A 4 kg body is acted upon by two perpendicular forces of 6 N and 8 N. The magnitude of the resultant acceleration is:",
    options: [
        "2.5 m/s²",
        "3.5 m/s²",
        "5 m/s²",
        "10 m/s²"
    ],
    answer: 0,
    explanation: "First find the resultant force using Pythagoras, then divide by mass.",
    mistake: "Adding 6 N and 8 N directly instead of finding the vector resultant.",
    solution: "Resultant force = √(6² + 8²) = 10 N, so a = 10/4 = 2.5 m/s²."
},

{
    question: "A satellite revolves around Earth in a circular orbit of radius 2R, where R is Earth's radius. If its orbital speed at radius R is v, the new orbital speed is:",
    options: [
        "v",
        "2v",
        "v/4",
        "v/√2"
    ],
    answer: 3,
    explanation: "Orbital speed varies inversely with the square root of orbital radius.",
    mistake: "Orbital speed is not inversely proportional to radius.",
    solution: "v₂ = v/√2."
},

{
    question: "A particle executes SHM with amplitude 8 cm. At a displacement of 4 cm, its speed is maximum?",
    options: [
        "Always true",
        "False",
        "Only for large amplitudes",
        "Cannot be determined"
    ],
    answer: 1,
    explanation: "In SHM, speed is maximum only at the mean position (x = 0).",
    mistake: "Assuming speed is maximum at half the amplitude.",
    solution: "Since x = 4 cm is not the mean position, the statement is false."
},

{
    question: "Two resistors of 6 Ω and 3 Ω are connected in parallel across a 12 V battery. The total current drawn is:",
    options: [
        "2 A",
        "4 A",
        "6 A",
        "8 A"
    ],
    answer: 2,
    explanation: "Find equivalent resistance first, then apply Ohm's law.",
    mistake: "Adding the resistances instead of using the parallel formula.",
    solution: "Equivalent resistance = 2 Ω, so I = 12/2 = 6 A."
},

{
    question: "Two blocks of 4 kg and 6 kg are connected by a light string on a frictionless surface. A force of 20 N is applied to the 6 kg block. Find the tension.",
    options: [
        "6 N",
        "8 N",
        "10 N",
        "12 N"
    ],
    answer: 1,
    explanation: "First find acceleration of the system, then apply F = ma on the 4 kg block.",
    mistake: "Calculating tension using the total mass instead of the 4 kg block.",
    solution: "Total mass = 10 kg, a = 20/10 = 2 m/s², T = 4 × 2 = 8 N."
},

{
    question: "A 2 kg object is projected vertically upward with speed 20 m/s. Take g = 10 m/s². Find the maximum height.",
    options: [
        "10 m",
        "15 m",
        "20 m",
        "25 m"
    ],
    answer: 2,
    explanation: "At maximum height, kinetic energy becomes zero.",
    mistake: "Using g = 9.8 instead of the given value 10.",
    solution: "h = u²/(2g) = 20²/(2×10) = 20 m."
},

{
    question: "A stone tied to a string moves in a circle of radius 0.5 m with speed 10 m/s. Find the centripetal acceleration.",
    options: [
        "100 m/s²",
        "150 m/s²",
        "200 m/s²",
        "250 m/s²"
    ],
    answer: 2,
    explanation: "Use the formula a = v²/r.",
    mistake: "Multiplying by radius instead of dividing by it.",
    solution: "a = 10²/0.5 = 100/0.5 = 200 m/s²."
},

{
    question: "A projectile is fired at 45° with speed 20 m/s. Take g = 10 m/s². Find its horizontal range.",
    options: [
        "20 m",
        "30 m",
        "40 m",
        "50 m"
    ],
    answer: 2,
    explanation: "Use R = u² sin2θ / g. At 45°, sin90° = 1.",
    mistake: "Using sin45° instead of sin90°.",
    solution: "R = 20² × 1 / 10 = 400/10 = 40 m."
}
    {
    question: "A car accelerates uniformly from 10 m/s to 30 m/s while covering 200 m. Its acceleration is:",
    options: [
        "1.5 m/s²",
        "2.0 m/s²",
        "2.5 m/s²",
        "3.0 m/s²"
    ],
    answer: 1,
    explanation: "Use the equation v² = u² + 2as.",
    mistake: "Do not use distance/time because time is not given.",
    solution: "30² = 10² + 2a × 200 ⇒ 900 = 100 + 400a ⇒ a = 2.0 m/s²."
},

{
    question: "A 2 kg body moving at 5 m/s is brought to rest by a retarding force. The work done by the retarding force is:",
    options: [
        "+25 J",
        "−25 J",
        "+50 J",
        "−50 J"
    ],
    answer: 1,
    explanation: "Apply the work–energy theorem.",
    mistake: "Retarding force does negative work, not positive.",
    solution: "W = ΔK = 0 − ½ × 2 × 5² = −25 J."
},

{
    question: "A stone tied to a string of length 2 m completes 5 revolutions per second. The centripetal acceleration is:",
    options: [
        "100π² m/s²",
        "200π² m/s²",
        "400π² m/s²",
        "800π² m/s²"
    ],
    answer: 1,
    explanation: "Use a = ω²r where ω = 2πf.",
    mistake: "Using frequency directly instead of angular velocity.",
    solution: "ω = 10π rad/s, so a = (10π)² × 2 = 200π² m/s²."
},

{
    question: "Three resistors of 6 Ω each are connected in parallel. Their equivalent resistance is:",
    options: [
        "1 Ω",
        "2 Ω",
        "3 Ω",
        "18 Ω"
    ],
    answer: 1,
    explanation: "For n equal resistors in parallel, Req = R/n.",
    mistake: "Do not add resistances in a parallel combination.",
    solution: "Req = 6/3 = 2 Ω."
},

{
    question: "The energy of a photon is 6.6 × 10⁻¹⁹ J. If Planck's constant is 6.6 × 10⁻³⁴ J·s, its frequency is:",
    options: [
        "10¹³ Hz",
        "10¹⁴ Hz",
        "10¹⁵ Hz",
        "10¹⁶ Hz"
    ],
    answer: 2,
    explanation: "Use E = hf.",
    mistake: "Frequency is energy divided by Planck's constant.",
    solution: "f = (6.6 × 10⁻¹⁹)/(6.6 × 10⁻³⁴) = 10¹⁵ Hz."
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

    window.scrollTo({ top: 0, behavior: "smooth" });
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

    document.getElementById("correctCount").textContent = correct;
    document.getElementById("wrongCount").textContent = wrong;
    document.getElementById("unattemptedCount").textContent = unattempted;
    document.getElementById("score").textContent =
        `${correct} / ${questions.length}`;

    window.scrollTo({ top: 0, behavior: "smooth" });
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
                <p><strong>Your answer:</strong> ${question.options[userAnswer]}</p>
                <p><strong>Correct answer:</strong> ${question.options[question.answer]}</p>
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

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {

    document.getElementById("review").classList.add("hidden");

    document.getElementById("home").classList.remove("hidden");
    document.getElementById("subjects").classList.remove("hidden");
    document.getElementById("about").classList.remove("hidden");

    window.scrollTo({ top: 0, behavior: "smooth" });
}
