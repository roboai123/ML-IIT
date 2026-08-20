const questions = [
{
q:"A disc rotates at 4 revolutions per second. Its angular velocity is:",
options:["4π rad/s","8π rad/s","16π rad/s","32π rad/s"],
answer:1
},
{
q:"Two charges +4 μC and +1 μC are 3 m apart. Where is the electric field zero?",
options:["1 m from +4 μC","2 m from +4 μC","Midpoint","Outside the charges"],
answer:1
},
{
q:"An ideal gas receives 600 J of heat and performs 250 J of work. Increase in internal energy is:",
options:["350 J","600 J","850 J","250 J"],
answer:0
},
{
q:"A wave has frequency 250 Hz and wavelength 1.2 m. Find its speed.",
options:["200 m/s","250 m/s","300 m/s","360 m/s"],
answer:2
},
{
q:"A convex lens has focal length 20 cm. An object is placed 40 cm away. Image distance is:",
options:["10 cm","20 cm","40 cm","Infinity"],
answer:2
}
];

let current = 0;
let selected = -1;

const box = document.getElementById("questionBox");
const next = document.getElementById("nextBtn");

function loadQuestion(){

selected = -1;

const q = questions[current];

box.innerHTML = `
<h2>QUESTION ${current+16}</h2>
<h3>${q.q}</h3>

${q.options.map((op,i)=>`
<div class="option" onclick="choose(${i},this)">
${String.fromCharCode(65+i)}. ${op}
</div>`).join("")}
`;

next.innerText = current === questions.length-1 ? "Finish" : "Next →";
}

function choose(i,el){

selected=i;

document.querySelectorAll(".option").forEach(x=>x.classList.remove("active"));
el.classList.add("active");
}

next.onclick=()=>{

if(selected==-1){
alert("Select an option");
return;
}

current++;

if(current<questions.length){
loadQuestion();
}else{
box.innerHTML="<h1>Test Completed ✅</h1>";
next.style.display="none";
}
};

loadQuestion();
