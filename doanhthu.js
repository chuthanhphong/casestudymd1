function addnew() {

    let str = "";
    str += "<input id ='new1' type='text' placeholder='Tên Sản Phẩm'>" +
        "<input id='new2' type='text'placeholder='giá thành'>" +
        "<input id='new3' type='number' placeholder='Số Lượng'>" +
        " <input id='new4' type='number'placeholder='Tồn Đọng ' >" +
        "<input id='new5' type='number'placeholder='Doanh thu'>" +
        "<button onclick='themmoi()' type='button'> add </button>";
    document.getElementById('addnewtab').innerHTML = str;
}

function themmoi() {
    let arr = new total();
    arr.name = document.getElementById('new1').value;
    arr.cost = document.getElementById('new2').value;
    arr.soluong = document.getElementById('new3').value;
    arr.tondong = document.getElementById('new4').value;
    arr.doanhthu = document.getElementById('new5').value;
    list.push(arr);
    document.getElementById('addnewtab').innerHTML = ''
    display();
}

function notemonney(i) {
    let a = "";
    a += '<input id="textrr" type="text"placeholder="Thêm ghi chú"></input>' + '<button type="button" onclick=save2(' + i + ')>Save</button>';
    document.getElementById('chuthich' + i).innerHTML = a;
}

function save2(i) {
    let note2222 = document.getElementById('textrr').value;
    list[i] = document.getElementById('chuthich' + i);
    list[i].innerHTML = '-' + note2222 + '</br>' + '<button onclick="notemonney()">Save</button>'
}

function calculator(i) {
    let number = list[i].doanhthu
    if (number < 200000) {
        alert('Lỗ Vốn');
    } else {
        let num2 = number * 0.02;
        alert('lãi ' + num2 + 'vnd');
    }
    return num2;
}

function tongdoanhthu() {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].doanhthu > 200000) {
            sum += list[i].doanhthu * 0.02
        }
    }
    alert('Tháng này tổng lãi được ' + sum + 'vnd');
}

function editted(i) {
    document.getElementById('thaydoi').innerHTML = `<br> <button id="td2" onclick="themmoivao(${i})"> Sửa Đổi Doanh Thu </button>
                <form>
                <input id="new name" type="text"placeholder="Tên Sản Phẩm">
                <input id="new cost" type="text"placeholder= " Giá Thành" >
                <input id="new Soluong" type="text"placeholder="Số Lượng">
                <input id="new tondong" type="text"placeholder="Tồn Động">
                <input id="new doanhthu" type="text"placeholder="Doanh Thu">
</form>`
}

function themmoivao(i) {
    let name = document.getElementById('new name').value;
    let cost = document.getElementById('new cost').value;
    let soluong = document.getElementById('new Soluong').value;
    let tondong = document.getElementById('new tondong').value;
    let doanhthu = document.getElementById('new doanhthu').value;
    let suadoilai = new total(name, cost, soluong, tondong, doanhthu);
    list[i] = suadoilai;
    display();
    document.getElementById('new name').value = '';
    document.getElementById('new cost').value = '';
    document.getElementById('new soluong').value = '';
    document.getElementById('new tondong').value = '';
    document.getElementById('new doanhthu').value = '';
}