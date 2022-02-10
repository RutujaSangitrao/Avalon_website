const quizData = [
    {
        question: "Which of these is not an application to listen to podcasts?",
        a: "Tiktok",
        b: "Spotify",
        c: "Gaana",
        d: "Apple Music",
        correct: "a",
    },
    {
        question: "Which of these file formats would be appropriate for a podcast?",
        a: ".mp3",
        b: ".png",
        c: ".jpeg",
        d: ".mov",
        correct: "a",
    },
    {
        question: "Podcasts can consist of:",
        a: "Storytelling",
        b: "Interviews",
        c: "Conversations between a host and a guest",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Once all of your audio is recorded, the next logical step would be...",
        a: "Add sound effects",
        b: "That's it, you're done",
        c: "Edit with software (cut, paste, fade, etc)",
        d: "Type up a transcript",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
