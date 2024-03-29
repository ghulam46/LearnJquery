function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/salah?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.onload = () => {
            if(ajax.status === 200) {
                const data = JSON.parse(ajax.responseText);
                resolve(data);
            } else {
                reject(Error("Error get data product"));
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

function handleError(err) {
    console.log('Whoops!, ' + err + ' Get request API');
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

    // handling error with try...catch
    try {
        // AFTER
        // coding syncronous tapi hasilnya asyncronous
        const value = await getProducts(document.getElementById("keyword").value)
        const products = value.data.products;
        
        clearProducts();
        products.forEach((product) => {
            displayProduct(product);
        });
    } catch(err) {
        console.log('ohhh no!');
        console.log(err.message);
    } finally {
        console.log('Already finish processing data product...');
    }

    // handling error with chaining .catch(function_name)
    // create new function handleError()
    // const value = await getProducts(document.getElementById("keyword").value).catch(handleError)
    // const products = value.data.products;
    
    // clearProducts();
    // products.forEach((product) => {
    //     displayProduct(product);
    // });
}