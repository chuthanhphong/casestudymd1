function deleteCustomer(i) {
    list_customer.splice(i, 1);
    displayCustomer();
}
function editCustomer(i) {
    document.getElementById('editform').innerHTML = `<br/><button type="button" onclick="change_infor(${i})"id="sua_ten">Change information</button>
        <form>
            <input id="new_code" type="text" placeholder="Mã Sản Phẩm">
            <input id="new_img" type="text"placeholder="Hình Ảnh">
                <input id="new_name" type="text" placeholder="Tên Sản Phẩm"/>
                <input id="new_date" type="date" placeholder="Ngày Sản Xuất"/>
                <input id="new_price" type="text" placeholder=" Giá Thành"/>
                <input id="new_address" type="text" placeholder="Nơi Sản Xuất"/>
        </form>`
}
function change_infor(i) {
    let code = document.getElementById('new_code').value;
    let img = document.getElementById('new_img').value;
    let name = document.getElementById('new_name').value;
    let date = document.getElementById('new_date').value;
    let price = document.getElementById('new_price').value;
    let address = document.getElementById('new_address').value;
    let customer = new Customer(code, name, date, price, address);
    list_customer[i] = customer;
    displayCustomer();
    document.getElementById('new_code').value = "";
    document.getElementById('new_img').value = '';
    document.getElementById('new_name').value = "";
    document.getElementById('new_date').value = "";
    document.getElementById('new_price').value = "";
    document.getElementById('new_address').value = "";
}
function add() {
    let str = "";
    str += "<input id ='n1' type='text' placeholder='Mã Sản Phẩm'>" +
        "' <input id='addhinhanh' type='text' placeholder='Hình Ảnh'/>'" +
        "<input id='n2' type='text'placeholder='Tên sản phẩm'>" +
        "<input id='n3' type='date' placeholder='Ngày Sản xuất'>" +
        "  <input id='n4' type='number'placeholder='Giá thành ' >" +
        "<input id= 'n5' type='text'placeholder='Nơi Sản Xuất'>" +
        "<button onclick='add11()' type='button'> add </button>";
    document.getElementById('add1').innerHTML = str;
}
function add11() {
    let customerX = new Customer();
    customerX.code = document.getElementById('n1').value;
    customerX.img = document.getElementById('addhinhanh').value;
    customerX.name = document.getElementById('n2').value;
    customerX.date = document.getElementById('n3').value;
    customerX.price = document.getElementById('n4').value;
    customerX.address = document.getElementById('n5').value;
    list_customer.push(customerX);
    document.getElementById("add1").innerHTML = "";
    displayCustomer();
}
function note(i) {
    let str1 = "";
    str1 += '<input id="ghichu" type="text" placeholder="Thêm ghi chú">' +
        '<button onclick="saved(' + i + ')" > Save </button>';
    document.getElementById('note' + i).innerHTML = str1;
}

function saved(i) {
    let notepath = document.getElementById("ghichu").value;
    list_customer[i] = document.getElementById('note' + i)
    list_customer[i].innerHTML = '-' + notepath + '<br>' + '<button  onclick="note()"> Ghi Chú </button>';
}
function next() {
    window.location.href = 'doanhthu.html'
}
function trangchu() {
    window.location.href = 'https://www.google.com/'
}
function sanpham(){
    window.location.href= 'index.html';
}
function thuchi(){
    alert('Hiện Không Khả Dụng')
};
function nhanvien(){
    alert('Hiện Không Khả Dụng')
}
f