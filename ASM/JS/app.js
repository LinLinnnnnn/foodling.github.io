listProduct = [

    {
        maID: 'sp1',
        name: 'BELL PEPPER',
        picture: 'img/product-1.jpg',
        giamgia: 20,
        valuePast: 100,
        linkDetail: 'chitiet1.html'
    },
    {
        maID: 'sp2',
        name: 'STRAWBERRY',
        picture: 'img/product-2.jpg',
        giamgia: 60,
        valuePast: 375,
        linkDetail: 'chitiet2.html'
    },
    {
        maID: 'sp3',
        name: 'GREEN BEANS',
        picture: 'img/product-3.jpg',
        giamgia: 60,
        valuePast: 75,
        linkDetail: 'chitiet3.html'
    },
    {
        maID: 'sp4',
        name: 'PURPLE CABBAGE',
        picture: 'img/product-4.jpg',
        giamgia: 50,
        valuePast: 200,
        linkDetail: 'chitiet4.html'
    },
    {
        maID: 'sp5',
        name: 'TOMATOE',
        picture: 'img/product-5.jpg',
        giamgia: 30,
        valuePast: 50,
        linkDetail: 'chitiet5.html'
    },
    {
        maID: 'sp6',
        name: 'BROCOLLI',
        picture: 'img/product-6.jpg',
        giamgia: 50,
        valuePast: 100,
        linkDetail: 'chitiet6.html'
    },
    {
        maID: 'sp7',
        name: 'CARROTS',
        picture: 'img/product-7.jpg',
        giamgia: 50,
        valuePast: 60,
        linkDetail: 'chitiet7.html'
    },
    {
        maID: 'sp8',
        name: 'FRUIT JUICE',
        picture: 'img/product-8.jpg',
        giamgia: 50,
        valuePast: 240,
        linkDetail: 'chitiet8.html'
    },

]

for (const product of listProduct) {
    var codeProduct = `
    <div class="boxs-item">
    <div class="boxs-item__pic">
        <img src="${product.picture}" alt="">

    </div>
    <div class="boxs-item__desc">
        <p class="boxs-item__desc--top"> <a href="chitiet1.html?maID=${product.maID}">${product.name}</a> </p>
        <p class="boxs-item__desc--bot"><del class="del">$ ${product.valuePast}</del>$ <i>${product.valuePast * (100 - product.giamgia) / 100}</i></p>
        <span class="boxs-item__desc--sale">${product.giamgia}%</span>
        <button class="btn-add-cart" id="add" onclick="addProduct(this)">Add To Cart</button>
    </div>
</div>
    `
    document.getElementById('listProduct').innerHTML += codeProduct;

}
var cart ;
if(localStorage.getItem('cart') == undefined){
    cart = [];
}else{
    cart = JSON.parse(localStorage.getItem('cart'));
}
function addProduct(btn) {
    var codesp = btn.parentElement;
    var tensp = codesp.querySelector('p a').innerText;
    var linksp = codesp.querySelector('p a').href;
    var valuesp = codesp.querySelector('p i').innerText;
    var picturesp = codesp.parentElement.querySelector('div img').src;
    var detailProduct = {
        ten: tensp,
        picture: picturesp,
        gia: valuesp,
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
    // console.log(cart);

}
// slide show

var images = [
    'img/slide5.jpg',
    'img/slide2.jpg',
    'img/slide3.jpg',
    'img/slide4.jpg',
    'img/slide1.jpg'
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
    // console.log(picnow);
};
run();
