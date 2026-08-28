function readjsondata(data) {
    let emptable = '';
    data.forEach(emp => {
        emptable += '<tr>' + 
        '<td>' + emp.id + '</td>' +
        '<td>' + emp.FirstName + ' ' + data.LastName + '</td>' +
        '<td>' + (emp.Gender === 'Male' ? 'M' : 'F') + '</td>' +
        '<td>' + emp.Position + '</td>' +
        '<td>' + emp.Address + '</td>';
    });
    document.getElementById('empsTable').innerHTML = emptable;
}

fetch('employees.json')
            .then(response => response.json())
            .then(data => readjsondata(data))
            .catch(error => console.log('error', error));
