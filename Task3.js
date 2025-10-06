// QUIZ FUNCTIONALITY
const quizData = [
  { question: "What is the capital of France?", options: ["Berlin", "Paris", "Madrid"], answer: "Paris" },
  { question: "Which language is used for web apps?", options: ["Python", "JavaScript", "C++"], answer: "JavaScript" },
  { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style System", "Creative Style Setup"], answer: "Cascading Style Sheets" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  let q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === q.answer) score++;
      document.getElementById("score").innerText = `Score: ${score}`;
    };
    optionsDiv.appendChild(btn);
  });
}

document.getElementById("nextBtn").onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Completed!";
    document.getElementById("options").innerHTML = "";
  }
};

loadQuestion();

// CAROUSEL FUNCTIONALITY
let imgIndex = 1;
document.getElementById("next").onclick = () => {
  imgIndex++;
  document.getElementById("carousel-img").src = `https://picsum.photos/400/200?random=${imgIndex}`;
};
document.getElementById("prev").onclick = () => {
  imgIndex--;
  if (imgIndex < 1) imgIndex = 1;
  document.getElementById("carousel-img").src = `https://picsum.photos/400/200?random=${imgIndex}`;
};

// FETCH API (JOKE)
document.getElementById("fetchJoke").onclick = async () => {
  let res = await fetch("https://official-joke-api.appspot.com/random_joke");
  let data = await res.json();
  document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
};
