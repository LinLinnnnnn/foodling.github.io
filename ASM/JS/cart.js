var cart = JSON.parse(localStorage.getItem('cart'));
// console.log(typeof cart);
hienSP();
function hienSP() {
    codett = "";
    document.querySelector('#table tbody').innerHTML = '';
    for (var i = 0; i < cart.length; i++) {
        var codeSP = `
            <tr class="table-cart-col">
            <td class="table-cart-item pic-cart">
                <img src="${cart[i].picture}" alt="">
            </td>
            <td class="table-cart-item">
                <p class="name-product-cart">
                    ${cart[i].ten}
                </p>
            </td>

            <td class="table-cart-item">
                <p class="price-cart">
                    $${cart[i].gia}
                </p>
            </td>
            <td class="table-cart-item">
            ${cart[i].soluong}
            </td>
            <td class="table-cart-item">
                <div id="total">
                ${Number(cart[i].gia * cart[i].soluong)}
                </div>
            </td>
            <td class="table-cart-item" >
                <i onclick='xoaSP(${i})' class="fa-solid fa-trash-can"></i>
            </td>
        </tr>`
        document.querySelector('#table tbody').innerHTML += codeSP;

        codett +=
            `<div class="detail-total-checkout">
            <p>${i + 1}: ${cart[i].ten} </p> 
            <p>$${Number(cart[i].gia) * Number(cart[i].soluong)}</p>
            </div>
            `
    }
    tinhTong();
    document.getElementById('thanhtoan').innerHTML = codett;
    document.getElementById('tongtienthanhtoan').innerText = document.getElementById('tongTien').innerText
    localStorage.setItem('cart', JSON.stringify(cart))
}
function xoaSP(i) {
    cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem('cart'));
    hienSP();
    tinhTong();
    thanhtoan();
}
function updateCart() {
    window.location.reload();
}

function xoaAll() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart))
    cart = JSON.parse(localStorage.getItem('cart'));
    hienSP();
    tinhTong();
    thanhtoan();
}
function tinhTong() {
    var tong = 0;
    for (var i = 0; i < cart.length; i++) {
        console.log(cart[i].gia);
        tong = tong + Number(cart[i].gia * cart[i].soluong)
    }
    document.getElementById('tongTien').innerText = '$' + tong;
}
function thanhtoan() {
    var codett = "";
    for (var i = 0; i < cart.length; i++) {
        codett +=
            `<div class="detail-total-checkout">
            <p>${i + 1}: ${cart[i].ten} </p> 
            <p>$${Number(cart[i].gia) * Number(cart[i].soluong)}</p>
            </div>
            `
    }

    document.getElementById('tongtienthanhtoan').innerText = document.getElementById('tongTien').innerText
};

// slide show

var images = [
    'img/slide5.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg'
    // 'img/slide1.jpg'
];
var run;
var picnow = 0;
function run() {
    setInterval(function () {
        picnow++;
        if (picnow > images.length - 1) {
            picnow = 0;
        }
        document.getElementById('container-slide').setAttribute('style', `background-image: url(${images[picnow]})`)
    }, 3000);
    console.log(picnow);
};
run();



// phiếu giảm giá

// var voucher = [
//     {
//         idVoucher: vc50,
//         giam: 0.5
//     },
//     {
//         idVoucher: vc30,
//         giam: 0.7
//     },
//     {
//         idVoucher: vc25,
//         giam: 0.76
//     },
//     {
//         idVoucher: vc100,
//         giam: 0
//     },
//     {
//         idVoucher: vc,
//         giam: 0.5
//     },

// ]