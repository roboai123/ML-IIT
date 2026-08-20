const questions = [
{
  q: "Q16. A disc rotates at 4 revolutions per second. Its angular velocity is:",
  options: ["4π rad/s", "8π rad/s", "16π rad/s", "32π rad/s"],
  answer: 1
},
{
  q: "Q17. Two charges +4 μC and +1 μC are 3 m apart. Where is the electric field zero?",
  options: ["1 m from +4 μC", "2 m from +4 μC", "Midpoint", "Outside the charges"],
  answer: 1
},
{
  q: "Q18. An ideal gas receives 600 J of heat and performs 250 J of work. Increase in internal energy is:",
  options: ["350 J", "600 J", "850 J", "250 J"],
  answer: 0
},
{
  q: "Q19. A wave has frequency 250 Hz and wavelength 1.2 m. Find its speed.",
  options: ["200 m/s", "250 m/s", "300 m/s", "360 m/s"],
  answer: 2
},
{
  q: "Q20. A convex lens has focal length 20 cm. An object is placed 40 cm away. Image distance is:",
  options: ["10 cm", "20 cm", "40 cm", "Infinity"],
  answer: 2
}
];

let current = 0;
let selected = -1;

const question = document.getElementById("question");
const options = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");

function loadQuestion() {
  selected = -1;

  const q = questions[current];
  question.textContent = q.q;
  options.innerHTML = "";

  q.options.forEach((opt, i) => {
    const div = document.createElement("div");
    div.className = "option";
    div.innerHTML = `${String.fromCharCode(65 + i)}. ${opt}`;

    div.onclick = () => {
      document.querySelectorAll(".option").forEach(x => x.classList.remove("active"));
      div.classList.add("active");
      selected = i;
    };

    options.appendChild(div);
  });

  nextBtn.textContent = current === questions.length - 1 ? "Finish" : "Next →";
}

// Start Practice button
startBtn.addEventListener("click", () => {
  document.getElementById("subjects").scrollIntoView({
    behavior: "smooth"
  });
});

// Next button
nextBtn.addEventListener("click", () => {
  if (selected === -1) {
    alert("Please select an option.");
    return;
  }

  current++;

  if (current >= questions.length) {
    question.innerHTML = "🎉 Test Completed!";
    options.innerHTML = "<h3>Your responses have been recorded.</h3>";
    nextBtn.style.display = "none";
    return;
  }

  loadQuestion();
});

loadQuestion();
