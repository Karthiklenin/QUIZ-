const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Hyper Trainer Marking Language", "Hyper Text Marketing Language", "HyperText Markdown Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which year was JavaScript launched?",
      options: ["1996", "1995", "1994", "1997"],
      answer: "1995"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function showQuestion() {
    const q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
  
    const optionButtons = document.querySelectorAll(".option-btn");
    optionButtons.forEach((btn, index) => {
      btn.innerText = q.options[index];
      btn.disabled = false;
      btn.style.backgroundColor = "#333";
      btn.style.color = "#fff";
    });
  }
  
  function checkAnswer(selectedBtn) {
    const q = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option-btn");
  
    optionButtons.forEach(btn => btn.disabled = true);
  
    if (selectedBtn.innerText === q.answer) {
      selectedBtn.style.backgroundColor = "#00ffaa";
      selectedBtn.style.color = "#000";
      score++;
    } else {
      selectedBtn.style.backgroundColor = "#ff3333";
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      document.querySelector(".options").classList.add("hidden");
      document.getElementById("next-btn").classList.add("hidden");
      document.getElementById("score").classList.remove("hidden");
      document.getElementById("question").innerText = "Quiz Completed!";
      document.getElementById("score").innerText = `Your score: ${score} / ${questions.length}`;
    }
  }
  
  showQuestion();
  