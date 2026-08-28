let form = document.getElementById('regisForm');

let txtinform = {
    en: {
        title: 'Register',
        name: 'Full Name',
        namephd: "Enter your name",
        email: 'Email',
        emailphd: "Enter your email",
        password: 'Password',
        passwordphd: "Create a password",
        c_password: 'Confirm Password',
        c_passwordphd: "Confirm your password",
        buttonphd: 'Sign Up',
        langLabel: 'Language: '
    },
    th: {
        title: 'สมัครสมาชิก',
        name: 'ชื่อ-นามสกุล',
        namephd: "กรอกชื่อของคุณ",
        email: 'อีเมล',
        emailphd: "กรอกอีเมลของคุณ",
        password: 'รหัสผ่าน',
        passwordphd: "สร้างรหัสผ่าน",
        c_password: 'ยืนยันรหัสผ่าน',
        c_passwordphd: "ยืนยันรหัสผ่านของคุณ",
        buttonphd: 'สมัครสมาชิก',
        langLabel: 'ภาษา: '
    }
};

// สร้าง Dropdown สลับภาษา
let langContainer = document.createElement("div");

// สร้าง TextNode เปล่าไว้รอใส่คำว่า Language / ภาษา
let langLabelText = document.createTextNode("");
langContainer.appendChild(langLabelText);

let br = document.createElement('br');
langContainer.appendChild(br);

let select = document.createElement('select');

let opten = document.createElement('option');
opten.appendChild(document.createTextNode('English'));
opten.value = 'en';

let optth = document.createElement('option');
optth.appendChild(document.createTextNode('ไทย'));
optth.value = 'th';

select.appendChild(opten);
select.appendChild(optth);
langContainer.appendChild(select);
form.appendChild(langContainer);

// หัวข้อ
let h1 = document.createElement('h1');
form.appendChild(h1);

// Name
let lb1 = document.createElement('label');
let input1 = document.createElement('input');
input1.type = 'text';
form.appendChild(lb1);
form.appendChild(input1);

// Email
let lb2 = document.createElement('label');
let input2 = document.createElement('input');
input2.type = 'email';
form.appendChild(lb2);
form.appendChild(input2);

// Password
let lb3 = document.createElement('label');
let input3 = document.createElement('input');
input3.type = 'password';
form.appendChild(lb3);
form.appendChild(input3);

// Confirm Password
let lb4 = document.createElement('label');
let input4 = document.createElement('input');
input4.type = 'password';
form.appendChild(lb4);
form.appendChild(input4);

// Button
let button = document.createElement('button');
form.appendChild(button);

// ฟังก์ชันเปลี่ยนภาษา
function updateText(lang) {
    let t = txtinform[lang];
    select.value = lang;

    // อัปเดตข้อความของข้อความกำกับภาษา
    langLabelText.nodeValue = t.langLabel;

    // textContent เพื่อเขียนทับข้อความเดิม
    h1.textContent = t.title;

    lb1.textContent = t.name;
    input1.placeholder = t.namephd;

    lb2.textContent = t.email;
    input2.placeholder = t.emailphd;

    lb3.textContent = t.password;
    input3.placeholder = t.passwordphd;

    lb4.textContent = t.c_password;
    input4.placeholder = t.c_passwordphd;

    button.textContent = t.buttonphd;
}

// จับ Event เมื่อเลือกภาษาใน Dropdown
select.addEventListener('change', function() {
    updateText(this.value);
});

// เรียกใช้งานครั้งแรกเพื่อแสดงผลภาษาอังกฤษ (ค่าเริ่มต้น)
updateText('en');

// style
document.body.style.background = '#fff'
form.style.border = '1px solid #d2d2d2';
form.style.borderRadius = '10px';
form.style.background = 'white';
form.style.padding = '20px';
form.style.margin = '100px auto';
form.style.width = "400px";

langContainer.style.textAlign = 'right';
langContainer.style.padding = '5px';

h1.style.textAlign = "center";
h1.style.marginBottom = "20px";

[lb1, lb2, lb3, lb4].forEach(lb => {
  lb.style.display = "block";
  lb.style.marginTop = "10px";
  lb.style.marginBottom = "4px";
  lb.style.fontSize = "18px";
});

[input1, input2, input3, input4].forEach(inp => {
  inp.style.padding = "8px";
  inp.style.border = "1px solid #ccc";
  inp.style.borderRadius = "5px";
  inp.style.marginBottom = "10px";
  inp.style.boxSizing = "border-box";
  inp.style.width = '100%';
});

select.style.padding = "5px";
select.style.borderRadius = "5px";

button.style.width = "100%";
button.style.padding = "10px";
button.style.backgroundColor = "#2196c9";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.fontSize = "18px";
button.style.marginTop = "16px";
