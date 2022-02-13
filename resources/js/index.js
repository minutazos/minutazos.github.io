import { quizLogic, loadQuiz } from "./quiz";

const questionsDiv = document.getElementById('questions')
const submitBtn = document.getElementById('submit')

function initialEvent() {
    questionsDiv.hidden = false
    submitBtn.removeEventListener('click', initialEvent)
    submitBtn.addEventListener('click', quizLogic)
    loadQuiz()
}

submitBtn.addEventListener('click', initialEvent)
