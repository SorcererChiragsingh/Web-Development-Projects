const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is the Pythagorean Theorem?',
    answers: [
      { text: 'a2 + b2 = c2', correct: true },
      { text: 'E = m.c^2', correct: false },
      { text: 'ax^3 + bx^2 + cx + d = 0', correct: false },
      { text: '1/2 × (b1 + b2) × h', correct: false }
    ]
  },
  {
    question: 'What is the French word for cheese?',
    answers: [
      { text: 'Fromage', correct: true },
      { text: 'Cheddar Cheese', correct: false },
      { text: 'Feta Cheese', correct: false },
      { text: 'Parmesan Cheese', correct: false }
    ]
  },
  {
    question: 'Which planet in our solar system has the longest day?',
    answers: [
      { text: 'Neptune', correct: false },
      { text: 'Uranus', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Saturn', correct: false }
    ]
  },
  {
    question: 'What is considered the largest dog breed?',
    answers: [
      { text: 'Anatolian shepherd', correct: false },
      { text: 'Mastiff', correct: true },
      { text: 'Neapolitan mastiff', correct: false },
      { text: 'Great Dane', correct: false }
    ]
  },
  {
    question: 'Which Indian state has the longest coastline?',
    answers: [
      { text: 'West Bengal', correct: false },
      { text: 'Karnataka', correct: false },
      { text: 'Maharashtra', correct: false },
      { text: 'Gujarat', correct: true }
    ]
  },
  {
    question: 'What is the national language of India?',
    answers: [
      { text: 'Marathi', correct: false },
      { text: 'Punjabi', correct: false },
      { text: 'Malayalam', correct: false },
      { text: 'Hindi', correct: true }
    ]
  },
  {
    question: 'Which is the largest state in India by area?',
    answers: [
      { text: 'Maharashtra ', correct: false },
      { text: 'Rajasthan', correct: true },
      { text: 'Arunachal Pradesh', correct: false },
      { text: 'Karnataka', correct: false }
    ]
  },
  {
    question: 'Which is the longest river in India?',
    answers: [
      { text: 'Ganges', correct: true },
      { text: 'Brahmaputra', correct: false },
      { text: 'Tapi River', correct: false },
      { text: 'Indus River', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]