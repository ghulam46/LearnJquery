// Promise
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code AJAX Here!
    const ajax = new XMLHttpRequest();
    const url = getProductsUrl(keyword);
    ajax.open("GET", url);
    ajax.send();
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

function buttonPromise() {
    getProducts(document.getElementById("keyword").value);
}