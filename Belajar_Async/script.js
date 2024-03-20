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

// menambahkan 2 param
function getProducts(keyword, callbackSuccess, callbackError) {
    // Code AJAX Here!
    const ajax = new XMLHttpRequest();

    ajax.onload = function() {
        if(ajax.status === 200) {
            const data = JSON.parse(ajax.responseText);
            // panggila param2
            callbackSuccess(data);
        } else {
            // panggil param3
            callbackError();
        }
    } 

    const url = getProductsUrl(keyword);
    ajax.open("GET", url);
    ajax.send();

    // tidak bisa dilakukan secara sync
    // const response = JSON.parse(ajax.responseText);
    // console.log(response)
}

function getProductsError() {
    console.log('Error get products');
    alert('Error get products');
}

function clearProducts() {
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function clearTableProducts() {
    const productUl = document.getElementById('table-products');
    productUl.textContent = '';
}

function displayTableProducts(data) {
    const table = document.createElement('table');
    table.setAttribute('border', 1);

    let index = 0;
    data.data.products.forEach(product => {
        table.insertRow(index).insertCell(0).innerText = product.name;
        index++;
    });

    const tableProduct = document.getElementById('table-products');
    tableProduct.appendChild(table);
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function buttonAjax() {
    // ini buat display product list
    // ada 3 parameter keyword, callbackSuccess, callbackError
    getProducts(document.getElementById("keyword").value, (data) => {
        clearProducts();
        displayProducts(data);
    }, () => {
        getProductsError();
    });

    // ini buat display product table
    // ada 3 parameter keyword, callbackSuccess, callbackError
    getProducts(document.getElementById("keyword").value, (data) => {
        clearTableProducts();
        displayTableProducts(data);
    }, () => {
        getProductsError();
    });

    console.log('success button click');
}