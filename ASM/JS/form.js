var user = document.getElementsByClassName('form-input')
// console.log(user);
var phone_user = user[2].value

var dulieu_user = JSON.parse(localStorage.getItem('dulieu_user'));
console.log(dulieu_user);
if (localStorage.getItem('dulieu_user') == undefined) {
    dulieu_user = [];
} else {
    dulieu_user = JSON.parse(localStorage.getItem('dulieu_user'))

}
function checkpsw() {
    var psw_user = user[3].value
    var psw_user2 = user[4].value
    // console.log(psw_user, psw_user2);
    if (psw_user == psw_user2) {
        // console.log(user[4]);
        user[4].classList.remove('errorpsw')
        document.getElementById('showTextPsw').innerHTML = ''
        return true;
    } else {
        user[4].classList.add('errorpsw')
        return false;

    }
}
function checkpsw1() {
    var psw_user = user[3].value
    var psw_user2 = user[4].value
    // console.log(psw_user, psw_user2);
    if (psw_user == psw_user2) {
        // console.log(user[4]);
        user[4].classList.remove('errorpsw')
        document.getElementById('showTextPsw').innerHTML = ''
        return true;
    }
}
function formDangKi() {
    var l_name_user = user[0].value
    var f_name_user = user[1].value
    var phone_user = user[2].value
    var psw_user = user[3].value
    var psw_user2 = user[4].value

    if (l_name_user == '' || f_name_user == '') {
        document.getElementById('showTextName').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Vui lòng nhập đầy đủ họ và tên !'
        return false;
    }
    if (!phone_user.match(/^(03|05|07|08|09|01[2|6|8|9])([0-9]{8})$/)) {
        document.getElementById('showTextPhone').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Số điện thoại bạn nhập chưa đúng. Vui lòng nhập lại!'
        return false;
    }
    if (psw_user == '' || psw_user2 == '') {
        document.getElementById('showTextPsw').innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Vui lòng nhập mật khẩu!'
        return false;
    }
    if (checkpsw() == false) {
        return false;
    }
    console.log(dulieu_user);
    // alert('thành công')
    var dulieu = {
        taikhoan_user: phone_user,
        matkhau_user: psw_user2,
        ten_user: l_name_user + ' ' + f_name_user
    }
    console.log(dulieu.phone_user);
    for (let i = 0; i < dulieu_user.length; i++) {
        if (dulieu_user[i].taikhoan_user == dulieu.taikhoan_user) {
            console.log(dulieu_user[i].taikhoan_user);
            alert('Số điện thoại bạn vừa nhập đã tồn tại');
            return false;
        }
    }

    dulieu_user.push(dulieu);
    localStorage.setItem('dulieu_user', JSON.stringify(dulieu_user))
    alert('Đăng kí thành công')

    return true;
    // console.log(l_name_user, f_name_user, phone_user, psw_user);
}
