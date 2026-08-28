function readjsondata(data) {
    let quiz = document.getElementById('quiz');
    let html = '';

    data.forEach((quest, index) => {
        html += `
        <div class='question'>
            <p>${index + 1}. ${quest.question}</p>

            <div class='choice'>
                <label><input type="radio" name="q${index}" value="a"> A. ${quest.answers.a}</label><br>
                <label><input type="radio" name="q${index}" value="b"> B. ${quest.answers.b}</label><br>
                <label><input type="radio" name="q${index}" value="c"> C. ${quest.answers.c}</label>
            </div>

            <button type="button" onclick="checkAnswer(${index}, '${quest.answers.correct}')">Check Answer</button>
            <span id="feedback${index}"></span>

        </div>
        `;
    });

    quiz.innerHTML = html;

    window.checkAnswer = function(index, correct) {
        let selected = document.querySelector(`input[name="q${index}"]:checked`); //คืนค่า element ตัวแรก ที่ตรงกับ selector
        let feedback = document.getElementById(`feedback${index}`);

        if (selected) {
            if (selected.value === correct) {
                feedback.textContent = "Correct";
                feedback.className = "correct";
            } else {
                feedback.textContent = "Incorrect";
                feedback.className = "incorrect";
            }
        } else {
            feedback.textContent = "Please select an answer";
            feedback.className = "incorrect";
        }
    };
}

fetch('questionAnswerData.json')
    .then(response => response.json())
    .then(data => readjsondata(data))
    .catch(error => console.log('error', error));
