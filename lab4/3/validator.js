let body = document.body;
body.style.textAlign = 'center';
body.style.fontFamily = '"Arimo", "Noto Sans Thai Looped", sans-serif';

// Title
let h1 = document.createElement('h1');
let h1txt = document.createTextNode('ตารางรายรับ-รายจ่าย');
let h2 = document.createElement('h2');
let h2txt = document.createTextNode('ยอดคงเหลือ');

h1.appendChild(h1txt);
h2.appendChild(h2txt);

body.appendChild(h1);
body.appendChild(h2);

// balance
let totalBalance = 0;

let balanceLabel = document.createElement('h1');
balanceLabel.textContent = totalBalance;

body.appendChild(balanceLabel);

// input line
let inputForm = document.createElement('div');

// รายการ
let recordInput = document.createElement('input');
recordInput.placeholder = 'รายการ';
recordInput.style.padding = '5px 7px';
recordInput.style.fontFamily = 'inherit';

// จำนวน
let amountInput = document.createElement('input');
amountInput.type = 'number';
amountInput.placeholder = 'จำนวน';
amountInput.style.padding = '5px 7px';
amountInput.style.marginLeft = '10px';
amountInput.style.fontFamily = 'inherit';

inputForm.appendChild(recordInput);
inputForm.appendChild(amountInput);

// dropdown1
let typeSelect = document.createElement('select');

let optIncome = document.createElement('option');
optIncome.value = 'income';
let optIncometxt = document.createTextNode('รายรับ');
optIncome.appendChild(optIncometxt);

let optExpense = document.createElement('option');
optExpense.value = 'expense';
let optExpensetxt = document.createTextNode('รายจ่าย');
optExpense.appendChild(optExpensetxt);

typeSelect.appendChild(optIncome);
typeSelect.appendChild(optExpense);
typeSelect.style.padding = '5px 7px';
typeSelect.style.marginLeft = '10px';
typeSelect.style.fontFamily = 'inherit';

inputForm.appendChild(typeSelect);

// date
let dateInput = document.createElement('input');
dateInput.type = 'date';

dateInput.style.marginLeft = '10px';
dateInput.style.padding = '5px 7px';
dateInput.style.fontFamily = 'inherit';

inputForm.appendChild(dateInput);

// Add button
let addBut = document.createElement('button');
let addButtxt = document.createTextNode('เพิ่มรายการ');
addBut.appendChild(addButtxt);
addBut.style.padding = '5px 7px';
addBut.style.marginLeft = '10px';
addBut.style.background = '#32cb5b'
addBut.style.fontFamily = 'inherit';

inputForm.appendChild(addBut);
inputForm.style.marginTop = '30px';

body.appendChild(inputForm);

// table
let table = document.createElement('table');
table.style.marginTop = '30px';
table.style.borderCollapse = 'collapse';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';
table.style.width = '50%';

let tr = document.createElement('tr');

// head table <tr><th></th></tr>
['วันที่', 'รายการ', 'รายรับ', 'รายจ่าย'].forEach(element => {
    let th = document.createElement('th');
    th.style.border = '1px solid #ddd';
    th.style.padding = '5px 7px';
    th.style.backgroundColor = '#1abc9c';
    th.style.color = 'white';

    let thtxt = document.createTextNode(element);
    th.appendChild(thtxt);
    tr.appendChild(th);
});

table.appendChild(tr)
body.appendChild(table);

// function add data
addBut.addEventListener('click', function() {
    let valRecord = recordInput.value;
    let valAmount = parseFloat(amountInput.value);
    let valDate = dateInput.value;
    let valType = typeSelect.value;

    if (!valRecord || isNaN(valAmount) || !valDate) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วนครับ');
        return;
    }

    let row = document.createElement('tr');

    let datecell = document.createElement('td');
    datecell.textContent = valDate;

    let recordcell = document.createElement('td');
    recordcell.textContent = valRecord;

    let incomecell = document.createElement('td');
    let expensecell = document.createElement('td');

    // ตกแต่ง Cell
    [datecell, recordcell, incomecell, expensecell].forEach(td => {
        td.style.border = '1px solid #ddd';
        td.style.padding = '8px';
    });

    if (valType === 'income') {
        incomecell.textContent = valAmount;
        expensecell.textContent = '0';
        totalBalance += valAmount;
    } else {
        incomecell.textContent = '0';
        expensecell.textContent = valAmount;
        totalBalance -= valAmount;
    }

    row.appendChild(datecell);
    row.appendChild(recordcell);
    row.appendChild(incomecell);
    row.appendChild(expensecell);

    table.appendChild(row);

    balanceLabel.textContent = totalBalance;

    recordInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
});
