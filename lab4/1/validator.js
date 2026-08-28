// หัวข้อ
let p1 = document.createElement('h2');
let text1 = document.createTextNode('ป้อนเลขสูตรคูณ (1-12):');
p1.style.fontSize = "20px";
p1.appendChild(text1);

// input
let p2 = document.createElement('p');
let input = document.createElement('input');
input.type = 'number';
input.min = 1;
input.max = 12;
input.id = 'numInput';
p2.appendChild(input);

input.style.fontSize = "16px";
input.style.padding = "3px 10px";
input.style.textAlign = "center";

// button
let button = document.createElement('button');
let buttontxt = document.createTextNode('แสดงสูตรคูณ');
button.appendChild(buttontxt);
button.onclick = showTable;
p2.appendChild(button);

button.style.marginLeft = "10px";
button.style.fontSize = "16px";

// add to html
let container = document.getElementById('container');
container.append(p1);
container.append(p2);

// func table
function showTable() {
    let n = document.getElementById('numInput').value;
    if (n < 1 || n > 12) {
        alert('กรุณากรอกเลขระหว่าง 1-12');
        return;
    }

    let table = document.getElementById('table');
    table.innerHTML = "";

    let tb1 = document.createElement('table');

    // Header table
    let trHead = document.createElement('tr');
    let th1 = document.createElement('th');
    let th1txt = document.createTextNode('เลขคูณ');
    let th2 = document.createElement('th');
    let th2txt = document.createTextNode('ผลลัพธ์');

    th1.appendChild(th1txt);
    th2.appendChild(th2txt);

    trHead.appendChild(th1);
    trHead.appendChild(th2);
    tb1.appendChild(trHead);

    // row
    for (let i = 1; i <= 12; i++){
        let trRow = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        td1.innerHTML = `${n} x ${i}`;
        td2.innerHTML = n * i;

        trRow.appendChild(td1);
        trRow.appendChild(td2);
        tb1.appendChild(trRow);

        td1.style.borderBottom = "1px solid black";
        td1.style.fontSize = "16px";
        td1.style.height = "15px";
        td1.style.width = "70px";

        td2.style.borderBottom = "1px solid black";
        td2.style.fontSize = "16px";
        td2.style.height = "15px";
        td2.style.width = "70px";
    }

    table.appendChild(tb1);

    tb1.style.textAlign = "center";
    tb1.style.marginTop = "5px";
    tb1.style.borderSpacing = "5px";

    th1.style.borderBottom = "1px solid black";
    th1.style.fontSize = "16px";
    th1.style.height = "15px";
    th1.style.width = "70px";

    th2.style.borderBottom = "1px solid black";
    th2.style.fontSize = "16px";
    th2.style.height = "15px";
    th2.style.width = "70px";

}
