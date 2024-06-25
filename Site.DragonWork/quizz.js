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
    question: "Qual é a principal característica dos anfíbios?",
    answers: [
      { text: "Eles têm penas", correct: false },
      { text: "Eles têm escamas", correct: false },
      { text: "Eles têm a pele úmida e permeável", correct: true },
      { text: "Eles têm exoesqueleto", correct: false }
    ]
  },
  {
    question: "Qual é o processo pelo qual os anfíbios passam de larva a adulto?",
    answers: [
      { text: "Metamorfose", correct: true },
      { text: "Fissão binária", correct: false },
      { text: "Partenogênese", correct: false },
      { text: "Brotamento", correct: false }
    ]
  },
  {
    question: "Qual destes é um exemplo de anfíbio?",
    answers: [
      { text: "Cobra", correct: false },
      { text: "Jacaré", correct: false },
      { text: "Sapo", correct: true },
      { text: "Águia", correct: false }
    ]
  },
  {
    question: "Como os anfíbios respiram?",
    answers: [
      { text: "Apenas pelos pulmões", correct: false },
      { text: "Apenas pelas guelras", correct: false },
      { text: "Pela pele, pulmões e algumas espécies por guelras", correct: true },
      { text: "Apenas pela pele", correct: false }
    ]
  },
  {
    question: "Qual destes habitats é típico para muitos anfíbios?",
    answers: [
      { text: "Desertos", correct: false },
      { text: "Áreas aquáticas e úmidas", correct: true },
      { text: "Florestas secas", correct: false },
      { text: "Regiões polares", correct: false }
    ]
  },
  {
    question: "Qual é a função principal da pele dos anfíbios?",
    answers: [
      { text: "Proteção contra predadores", correct: false },
      { text: "Respiração e troca de gases", correct: true },
      { text: "Movimentação", correct: false },
      { text: "Regulação da temperatura", correct: false }
    ]
  },
  {
    question: "O que é um girino?",
    answers: [
      { text: "Um anfíbio adulto", correct: false },
      { text: "A forma larval de um anfíbio", correct: true },
      { text: "Um tipo de réptil", correct: false },
      { text: "Uma espécie de peixe", correct: false }
    ]
  }
]