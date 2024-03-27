// Promise
function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code AJAX Here!
    const url = getProductsUrl(keyword);
    return fetch(url, {
        method: "GET"
    }).then((response) => {
        // Translate response to JSON
        return response.json();
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

function buttonFetch() {
    getProducts(document.getElementById("keyword").value)
        .then((value) => {
            return value.data.products;
        })
        .then((products) => {
            clearProducts();
            products.forEach((product) => {
                displayProduct(product);
            });
        })
        .catch((error) => {
            alert(error.message);
        })
        .finally(() => {
            console.log("Selesai memproses Promise");
        });
}