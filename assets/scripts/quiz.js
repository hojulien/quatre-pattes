let question = document.querySelectorAll(".quiz-box");
let score = 0;
let total = question.length;
let current = 0;

// CHANGE LA DIV SELON LA REPONSE
function showAnswer (correction, color, name) {
    correction.style.display = "flex";
    correction.style.backgroundColor = color;
    correction.firstElementChild.setAttribute("src", `assets/images/icons/${name}.svg`);
}

// POUR CHAQUE QUESTION, ON VERIFIE LE DUO DE REPONSE ASSOCIE
question.forEach((question) => {
    let reponse = question.querySelectorAll(".reponse");
    let correction = question.querySelector(".correction");

    // POUR CHAQUE REPONSE, ON VERIFIE LA VERACITE
    reponse.forEach((x) => {
        x.addEventListener("click", () => {
            reponse.forEach((b) => {
                b.style.display = "none";
            });
            
            // "CONVERTIT" LE STRING EN BOOLEEN
            let isCorrect = x.dataset.correct === "true";
            current++;

            if (isCorrect) {
                showAnswer(correction, "#DCFCE6", "correct")
                score++;
            } else {
                showAnswer(correction, "#FFE2E2", "incorrect")
            }

            if (current == total) {
                document.getElementById("score").innerHTML = `<p>Votre score total est de <strong>${score} / ${total}</strong></p>`;
            }
        });
    });
});