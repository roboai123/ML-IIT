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
},
