// Promise
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code AJAX Here!

    const promise = new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = function() {
            if(ajax.status === 200) {
                const data = JSON.parse(ajax.responseText);
                resolve(data);
            } else {
                reject(Error("Data product gagal dimuat"));
            }
        } 
    
        const url = getProductsUrl(keyword);
        ajax.open("GET", url);
        ajax.send();
    });

    return promise;
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
    productUl.appendChild(productLi);
}

function buttonPromise() {
    // getProducts(document.getElementById("keyword").value)
    //     .then((value) => {
    //         return value.data.products;
    //     })
    //     .then((products) => {
    //         clearProducts();
    //         products.forEach((product) => {
    //             displayProduct(product);
    //         });
    //     })
    //     .catch((error) => {
    //         alert(error.message);
    //     })
    //     .finally(() => {
    //         console.log("Selesai memproses Promise");
    //     })

    const promise1 = getProducts(document.getElementById("keyword").value);
    const promise2 = getProducts(document.getElementById("keyword2").value);
    const promise3 = getProducts(document.getElementById("keyword3").value);

    Promise.all([promise1, promise2, promise3])
        .then((values) => {
            return values.map(value => value.data.products)
        })
        .then((values) => {
            clearProducts();
            values.forEach((products) => {
                products.forEach((product) => {
                    displayProduct(product);
                })
            });
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            console.log('Selesai memproses semua Promise');
        })
}