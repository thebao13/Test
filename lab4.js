function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function dangnhap(){
    var ten = document.getElementById("ten").value;
    var pass = document.getElementById("pass").value; 
    if (ten === ""){
        alert("Vui lòng nhập tên đăng nhập");
        return false;
    }
    if (pass === ""){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    if (ten.length < 4) {
        alert("Tên đăng nhập phải có ít nhất 4 ký tự");
        return false;
    }
    if (pass.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự");
        return false;
    }
    alert("Chúc mừng bạn đã đăng nhập thành công");
    return true;
}

function hienthi() {
    var container2 = document.querySelector('.container2');
    container2.style.display = 'block';
    var container = document.querySelector('.container');
    container.style.display = 'none';
}

function dangky(){
    var ten = document.getElementById("t").value;
    var email = document.getElementById("e").value;
    var p1 = document.getElementById("pass1").value; 
    var p2 = document.getElementById("pass2").value;  
    if (ten === ""){
        alert("Vui lòng nhập tên đăng nhập");
        return false;
    }
    if (ten.length < 4) {
        alert("Tên đăng nhập phải có ít nhất 4 ký tự");
        return false;
    }
    if (email === ""){
        alert("Vui lòng nhập email");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Email không hợp lệ");
        return false;
    }
    if (p1 === "" || p2 === ""){
        alert("Vui lòng nhập mật khẩu");
        return false;
    }
    if (p1.length < 8) {
        alert("Mật khẩu phải có ít nhất 8 ký tự");
        return false;
    }
    if (p1 !== p2){
        alert("Mật khẩu không trùng khớp");
        return false;
    }
    alert("Chúc mừng bạn đã đăng ký thành công");
    return true;
}
