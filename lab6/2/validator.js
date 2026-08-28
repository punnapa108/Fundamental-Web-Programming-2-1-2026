function readjsondata(data) {
    let box = document.getElementById('box');
    let html = '';

    data.forEach((student, index) => {
        let imgsrc = student.gender === 'Male' ? 'https://webdev.it.kmitl.ac.th/labdocs/unit6/images/img_male.png' : 'https://webdev.it.kmitl.ac.th/labdocs/unit6/images/img_female.png';
        html +=
        '<div class=\'col\'>' +
        '<img src=' + imgsrc + '>' +
        '<h2>' + (index + 1) + '. ' + student.name + '</h2>' +
        '<p>' + 'Physics : ' + student.physics + '</p>' +
        '<p>' + 'Mathematics : ' + student.maths + '</p>' +
        '<p>' + 'English : ' + student.english + '</p>' +
        '</div>'
    });
    box.innerHTML = html;
}

fetch('student-score.json') 
    .then(response => response.json())
    .then(data => readjsondata(data))
    .catch(error => console.log('error', error));
