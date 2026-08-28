function validateForm() {
    let username = document.getElementById('Username').value.trim();
    let email = document.getElementById('Email').value.trim();
    let phone = document.getElementById('Phone').value.trim();
    let password = document.getElementById('Password').value;
    let c_password = document.getElementById('ConfirmPassword').value;

    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";

    if (username.length < 5 ) {
        document.getElementById("usernameError").innerHTML = "Username ต้องระบุอย่างน้อย 5 ตัวอักษร";
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // RegEx
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Email ไม่ถูกต้อง"
        return false;
    }

    let phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerHTML = "หมายเลขโทรศัพท์ต้องเป็นตัวเลขเท่านั้น และต้องมีความยาว 10 หลัก"
        return false;
    }

    let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").innerHTML = "จำนวนต้องไม่ต่ำกว่า 8 ตัวอักษร ต้องมีตัวอักษรพิมพ์ใหญ่ ต้องมีตัวอักษรพิมพ์เล็ก ต้องมีตัวเลข ต้องมีอักขระพิเศษอย่างน้อยอย่างละ 1 ตัว"
        return false;
    }

    if (password != c_password) {
        document.getElementById("confirmError").innerHTML = "Password ไม่ถูกต้อง"
        return false
    }

    if (true) {
        alert('ลงทะเบียนเสร็จสิ้น')
    }
    }
