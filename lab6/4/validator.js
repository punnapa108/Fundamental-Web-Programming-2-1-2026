document.addEventListener("DOMContentLoaded", LoadData); // บอกให้ JavaScript รอจนกว่าเนื้อหาในหน้าเว็บโหลดเสร็จทั้งหมด จากนั้นจึงเรียกใช้ฟังก์ชัน LoadData()

function SaveForm() {
    let wordInput = document.getElementById('Word');
    let meaningInput = document.getElementById('Meaning');

    let word = wordInput.value.trim(); // store word from input
    let meaning = meaningInput.value.trim();

    if (word === "" || meaning === "") {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
    }

    let vocab = JSON.parse(localStorage.getItem("vocab")) || [];
    // localStorage.getItem("vocab") ดึงข้อมูลที่เคยบันทึกไว้ใน vocab
    // JSON.parse() แปลงข้อมูลจาก string ที่เก็บใน localStorage กลับมาเป็น Object

    vocab.push({ word: word, meaning: meaning });
    // เพิ่ม object ใหม่เข้าไปใน array vocab e.g. { word: "Apple", meaning: "แอปเปิ้ล" }

    localStorage.setItem("vocab", JSON.stringify(vocab));
    // JSON.stringify(vocab) แปลง array ของ object ให้เป็น string ก่อนบันทึกลง vocab

    wordInput.value = "";
    meaningInput.value = "";
    wordInput.focus();

    LoadData();
}

function LoadData() {
    let vocab = JSON.parse(localStorage.getItem("vocab")) || [];
    // localStorage.getItem("vocab") ดึงข้อมูลที่เคยบันทึกไว้ใน key "vocab"

    let wordlist = document.getElementById("wordlist");
    wordlist.innerHTML = "";

    vocab.forEach((v, index) => {
        let w = document.createElement("div");
        w.className = "voc"; // สร้าง <div> ใหม่สำหรับแต่ละคำศัพท์ชื่อ v
        w.textContent = v.word + ' - ' + v.meaning; // textContent แสดงข้อความ

        let delBut = document.createElement("button");
        delBut.className = 'deletebut';
        delBut.textContent = "ลบ";
        delBut.onclick = () => {
            // ลบข้อมูลออกจาก array
            vocab.splice(index, 1);
            // บันทึกกลับไปที่ localStorage
            localStorage.setItem("vocab", JSON.stringify(vocab));
            LoadData();
        };

        w.appendChild(delBut);
        wordlist.appendChild(w);
    });
}
