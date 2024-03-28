function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = () => {
            if(ajax.status === 200) {
                const data = JSON.parse(ajax.responseText);
                resolve(data);
            } else {
                reject(Error(ajax.statusText));
            }
        }

        ajax.open("GET", getProductsUrl(keyword));
        ajax.send();
    })
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

// async await bekerja secara asyncronous tetapi cara coding syncronous
async function buttonAjax() {
    // BEFORE
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
    //     });

    // AFTER
    // coding syncronous tapi hasilnya asyncronous
    const value = await getProducts(document.getElementById("keyword").value)
    const products = value.data.products;

    clearProducts();
    products.forEach((product) => {
        displayProduct(product);
    });
}