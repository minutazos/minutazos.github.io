import getData from './data.js';

const data = getData();
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const yes_label = document.getElementById('yes_label')
const no_label = document.getElementById('no_label')

let currentQuiz = 0
let score = 0

export function loadQuiz()
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
    if (score > 7) {
        quiz.innerHTML = `
        <h3>You answered ${score}/${data.length} questions correctly</h3>
        <h2>You are on the good way to success!</h2>
                
        <button onclick="location.reload()">Reload</button>
        `
    } else {
        quiz.innerHTML = `
        <h3>You answered ${score}/${data.length} questions correctly</h3>
        <h2>You still have work to do to be on the good way to success!</h2>
        <h2>Keep going!</h2>

        <button onclick="location.reload()">Reload</button>
        `
    }
}

export function quizLogic() {
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
        }
    }
}
