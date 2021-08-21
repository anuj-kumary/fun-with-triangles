const quizContainer = document.querySelector(".quiz-container");
const submitQuiz = document.querySelector("#submit-quiz");
const output = document.querySelector("#output");

const correctAnswer = [
    "90°",
    "right angled",
    "Isosceles triangle",
    "Equal",
    "60°",
];
let score = 0;

submitQuiz.addEventListener("click", () => {
    const data = new FormData(quizContainer);
    let index = 0;
    for (let value of data.values()) {
        if (value === correctAnswer[index]) {
            score++;
        }
        index++;
    }
    output.innerText = `Your score is ${score} out of 5`;
    submitQuiz.disabled = true;
});