function generateGrade() {
    const table = document.getElementById('tbGrade');
    for (let i = 0; i <= 8; i++) {
        let score = Math.floor(Math.random() * (100 - 40 + 1)) + 40;
        table.rows[i+1].cells[2].innerHTML = score;
        table.rows[i+1].cells[3].innerHTML = '';
    }
}

function calGrade() {
    const table = document.getElementById('tbGrade');
    for (let i = 0; i <= 8; i++) {
        let score = parseInt(table.rows[i+1].cells[2].innerHTML);
        let grade = '';
        if (score >= 80) grade = 'A';
        else if (score >= 70) grade = 'B';
        else if (score >= 60) grade = 'C';
        else if (score >= 50) grade = 'D';
        else grade = 'F';
        table.rows[i+1].cells[3].innerHTML = grade;
    }
}
