const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Bom"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}

const questions = [
  {
    question: "Qual destes é um mamífero marinho?",
    answers: [
      { text: "Tubarão", correct: false },
      { text: "Golfinho", correct: true },
      { text: "Tartaruga", correct: false },
      { text: "Carpa", correct: false }
    ]
  },
  {
    question: "Qual é o único mamífero capaz de voar?",
    answers: [
      { text: "Avestruz", correct: false },
      { text: "Pombo", correct: false },
      { text: "Morcego", correct: true },
      { text: "Falcão", correct: false }
    ]
  },
  {
    question: "Qual destes animais é um mamífero?",
    answers: [
      { text: "Lagarto", correct: false },
      { text: "Gato", correct: true },
      { text: "Cobra", correct: false },
      { text: "Sapo", correct: false }
    ]
  },
  {
    question: "Como os mamíferos se alimentam?",
    answers: [
      { text: "Através de fotossíntese", correct: false },
      { text: "Comendo carne", correct: false },
      { text: "Amamentando seus filhotes", correct: true },
      { text: "Respirando ar", correct: false }
    ]
  },
  {
    question: "Qual destes mamíferos é conhecido por viver na água e na terra?",
    answers: [
      { text: "Leão", correct: false },
      { text: "Golfinho", correct: false },
      { text: "Morsa", correct: true },
      { text: "Girafa", correct: false }
    ]
  },
  {
    question: "Qual é o maior mamífero terrestre?",
    answers: [
      { text: "Elefante Africano", correct: true },
      { text: "Girafa", correct: false },
      { text: "Rinoceronte", correct: false },
      { text: "Leão", correct: false }
    ]
  },
  {
    question: "Quantas câmaras cardíacas têm um mamífero típico?",
    answers: [
      { text: "Uma", correct: false },
      { text: "Duas", correct: false },
      { text: "Três", correct: true },
      { text: "Quatro", correct: false }
    ]
  }
]
