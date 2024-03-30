// script.js

// Function to handle quiz submission
function submitQuiz() {
    // Retrieve the form element
    const quizForm = document.getElementById('quizForm');

    // Create an object to store correct answers and explanations
    const correctAnswers = {
        q1: { answer: 'a', explanation: 'Hyper Text Markup Language' },
        q2: { answer: 'a', explanation: 'alt' },
        q3: { answer: 'b', explanation: 'style' },
        q4: { answer: 'a', explanation: 'A frame for embedding external content' },
        q5: { answer: 'a', explanation: 'select' },
        q6: { answer: 'b', explanation: 'To specify metadata about an HTML document' }
    };

    // Calculate score and display correct answers and explanations
    let score = 0;
    let answersHTML = ''; // HTML content for displaying answers and explanations

    // Loop through each question in the form
    quizForm.querySelectorAll('h3').forEach((question, index) => {
        const questionNumber = index + 1; // Question number starts from 1

        // Get the selected answer for the current question
        const selectedAnswer = quizForm.querySelector(`input[name="q${questionNumber}"]:checked`);
        const selectedValue = selectedAnswer ? selectedAnswer.value : '';

        // Check if the selected answer matches the correct answer
        if (selectedValue === correctAnswers[`q${questionNumber}`].answer) {
            score++; // Increment score if the answer is correct
        }

        // Construct HTML content for displaying correct answers and explanations
        answersHTML += `<p><strong>Question ${questionNumber}:</strong> Your answer was ${selectedValue === '' ? 'not selected' : selectedValue}.`;
        answersHTML += ` Correct answer is ${correctAnswers[`q${questionNumber}`].answer}. Explanation: ${correctAnswers[`q${questionNumber}`].explanation}</p>`;
    });

    // Store score and answers in localStorage (for demonstration purposes)
    localStorage.setItem('score', score);
    localStorage.setItem('answersHTML', answersHTML);

    // Redirect to the Score and Answers page
    window.location.href = 'score.html';
}
