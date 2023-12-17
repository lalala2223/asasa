/* <div class="product1">
    <h1>BMW M5F90</h1>
    <img src="https://vrcpitbull.com/wp-content/uploads/2011/02/VAMPVAMP%E2%80%A2.jpg">
    <p>Price:</p>
    <p>Description:</p>
    <a>seller profile</a><br>
    <button>Buy</button>
</div> */
console.log("fdfds")
let productsArray = [];
let xhr = new XMLHttpRequest();
let url = 'https://my-json-server.typicode.com/lalala2223/asasa';
xhr.open('GET', url + '/products');
xhr.responseType = 'json';
xhr.onload = function(){
    let products = xhr.response;
    console.log(products.length)
    for(let i=0;i<products.length;i++){
        let html=`
        <div class="product1">
            <h1>${products[i].name}</h1>
            <img src="${products[i].photo_url}">
            <p>Price:${products[i].price}$</p>
            <p>Description ${products[i].description}</p>
            <a>seller profile</a><br>
            <button>Buy</button>
        </div>
        `
        $("#products-grid").append(html);
    }
}
xhr.send()