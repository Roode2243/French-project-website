function startQuiz() {
    const questions = [
        {
            question: "What is the name of the king who built the Palace of Versailles?",
            answers: ["Louis XIV", "Louis XVI", "Napoleon"],
            correct: 0
        },
        {
            question: "Who was the leader of the French resistance during World War II?",
            answers: ["Charles de Gaulle", "Philippe Pétain", "Jean Moulin"],
            correct: 0
        },
        {
            question: "What year marked the beginning of the French Revolution?",
            answers: ["1789", "1792", "1804"],
            correct: 0
        }
    ];

    let score = 0;

    questions.forEach((q) => {
        const userAnswer = prompt(q.question + "\n" + q.answers.map((a, i) => `${i + 1}. ${a}`).join("\n"));
        if (userAnswer - 1 === q.correct) {
            score++;
        }
    });

    alert("Your score is: " + score + "/" + questions.length);
}

// Additional JavaScript functions can be added here as needed.
