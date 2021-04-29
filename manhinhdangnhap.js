function changeAdd() {
    let a = document.getElementById('login').value;
    let b = document.getElementById('matkhau').value;
    if (a === 'chuthanhphong' && b === '12345') {

        window.location.href = "manhinhsanpham.html";

    } else if (a !== 'chuthanhphong' && b !== '12345') {
        alert('sai mật khẩu vui lòng đăng nhập lại');
    }
}

function reset() {
    document.getElementById('name').reset();
}

function myDate() {
    let d = new Date();
    let ngay = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    let thang = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    document.getElementById('date').innerHTML = "Hôm nay, " + ngay[d.getDay()] + " Ngày " + d.getDate() + 'Tháng ' + thang[d.getMonth()]
        + ' năm  ' + d.getFullYear();
}

function time() {
    let day = new Date();
    let gio = day.getHours();
    let phut = day.getMinutes();
    let giay = day.getSeconds();
    setTimeout("time()", 1000)
    document.getElementById('date').innerHTML = day
}
function bigimg(x) {
    x.style.height = "220px";
    x.style.width = '220px'
}


function normalimg(x){
    x.style.height='200px'
    x.style.width='200px'
}
