listProduct = [
    {  maID: 'sp1',
        name: 'BELL PEPPER',
        picture: 'img/product-1.jpg',
        anhphu: ['img/Ot-chuong-mau-baby-2.jpg', "img/ot-chuong-xanh-da-lat.jpg", "img/Ớt-Chuông-Vàng.jpg"],
        giamgia: 20,
        valuePast: 100,
        mota:'BELL PEPPER Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp2',
        name: 'STRAWBERRY',
        picture: 'img/product-2.jpg',
        anhphu: ['img/dau1.jpeg', "img/dau3.jpeg", "img/dau2.jpeg"],
        giamgia: 60,
        valuePast: 375,
        mota:'STRAWBERRY Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp3',
        name: 'GREEN BEANS',
        picture: 'img/product-3.jpg',
        anhphu: ['img/dau1.jpg', "img/dau2.jpg", "img/dau3.jpg"],
        giamgia: 60,
        valuePast: 75,
        mota:'GREEN BEANS Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp4',
        name: 'PURPLE CABBAGE',
        picture: 'img/product-4.jpg',
        anhphu: ['img/cai1.jpeg', "img/cai2.jpeg", "img/cai3.webp"],
        giamgia: 50,
        valuePast: 200,
        mota:'PURPLE CABBAGE Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp5',
        name: 'TOMATOE',
        picture: 'img/product-5.jpg',
        anhphu: ['img/ca1.jpg', "img/ca2.jpg", "img/ca3.jpg"],
        giamgia: 30,
        valuePast: 50,
        mota:'TOMATOE Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp6',
        name: 'BROCOLLI',
        picture: 'img/product-6.jpg',
        anhphu: ['img/bong1.jpg', "img/bong2.jpeg", "img/bong3.jpeg"],
        giamgia: 50,
        valuePast: 100,  
        mota:'BROCOLLI Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp7',
        name: 'CARROTS',
        picture: 'img/product-7.jpg',
        anhphu: ["img/rot1.webp", "img/rot2.jpg","img/rot3.jpg"],
        giamgia: 50,
        valuePast: 60,
        mota:'CARROTS Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },
    {
        maID: 'sp8',
        name: 'FRUIT JUICE',
        picture: 'img/product-8.jpg',
        anhphu: ['img/nuoc1.jpg', "img/nuoc2.jpg", "img/nuoc3.jpg"],
        giamgia: 50,
        valuePast: 240,            
        mota:'FRUIT JUICE Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, temporibus. Eaque soluta rem, rerum distinctio atque esse iste, ipsum animi obcaecati facere, porro inventore iusto tempora quae consequuntur voluptatem suscipit? '
    },

];
var maID = decodeURI(location.search).substring(6)
console.log(maID);
var sp;
for(var i = 0; i < listProduct.length;i++){
    if(listProduct[i].maID == maID){
        sp = listProduct[i] ;
        console.log(sp);
        break;
    }
}
console.log(document.querySelector('.detail-picture>img').src = sp.picture); 
for(var i = 0; i <sp.anhphu.length; i++){
    var codeAnh =  `<img onmouseover="thayAnh(this)" onmouseout="khoiPhuc(this)" src="${sp.anhphu[i]}" alt="">`
    console.log(codeAnh);
    document.querySelector('.picture-phu').innerHTML +=codeAnh;
}
document.querySelector('.name-product p').innerText = sp.name
document.querySelector('.price-product p').innerText = '$' + Number(sp.valuePast * (100 - sp.giamgia) / 100);
document.querySelector('.describe').innerText = sp.mota

function thayAnh(pic){
document.querySelector('.detail-picture img').src = pic.src;
}
function khoiPhuc(pic){
    document.querySelector('.detail-picture img').src = sp.picture;
}


function addProduct1() {
    var tenspct = document.getElementById('name-product').innerText;
    console.log(tenspct);
    // var linksp = codesp.querySelector('p a').href;
    var valuespct = document.querySelector('#price-product ').innerText.substring(1);
    var picturespct = document.querySelector('.detail-picture img').src;
    var detailProduct = {
        ten: tenspct,
        picture: picturespct,
        gia: valuespct,
        soluong: 1
    }

    var chuaMua = true;
    for (const item of cart) {
        if (item.ten == detailProduct.ten) {
            item.soluong++;
            chuaMua = false;
            break;
        }
    }
    
    if (chuaMua == true) {
        cart.push(detailProduct);
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    // // console.log(cart);

}