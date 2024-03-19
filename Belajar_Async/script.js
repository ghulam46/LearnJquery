// CALLBACK
function callback() {
    console.log('Hello world!');
}

function buttonClick() {
    // setTimeout(function() {
    //     callback();
    // }, 5000);
    // setTimeout(callback, 5000);
    setInterval(function() {
        callback();
    }, 2000);
    console.log('Success click button');
}


// AJAX
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code AJAX Here!
    const ajax = new XMLHttpRequest();
    const url = getProductsUrl(keyword);
    ajax.open("GET", url);
    ajax.send();

    // tidak bisa dilakukan secara sync
    // const response = JSON.parse(ajax.responseText);
    // console.log(response)
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLis);
}

function buttonAjax() {
    getProducts(document.getElementById("keyword").value);
}