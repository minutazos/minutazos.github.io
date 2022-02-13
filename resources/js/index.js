import getData from './data.js';

const data = getData();
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const yes_label = document.getElementById('yes_label')
const no_label = document.getElementById('no_label')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz()
{
    deselectAnswers()

    const currentData = data[currentQuiz]

    questionEl.innerText = currentData.question
    yes_label.innerText = currentData.a
    no_label.innerText = currentData.b
}

function deselectAnswers()
{
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected()
{
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return (answer)
}

function finalPage(score)
{
    // TODO: poner si va camino al exito dependiendo de si saca mas del 70% en score
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === data[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < data.length) {
            loadQuiz()
        } else {
            finalPage(score)
            quiz.innerHTML = `
                <h2>You answered ${score}/${data.length} questions correctly</h2>
 
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})