const product1 = {
    img: "../Images/gray.jpg.jpg",
    product: "Gray Jacket",
 }   

 const product2 = {
    img: "../Images/green.jpg.jpg",
    product: "Green Jacket",
 }   

const product3 = {
    img: "../Images/orange.jpg.jpg",
    product: "Orange Jacket",
 }   

 const product4 = {
    img: "../Images/yellow.jpg.jpeg",
    product: "Yellow Jacket",
 }   

 const products = [product1, product2, product3, product4];

 const productContainer = document.querySelector(".other-products");

 productContainer.innerHTML = "";

 for(let i = 0; i < products.length; i++){
    console.log(products[i]); 

    productContainer.innerHTML += `<div class="product-item">
                                <a href="jacket_page.html" style="color: gray">
                                <img src=${products[i].img}>
                                <p>${products[i].product}</p>
                                </a>
                                </div>`;                                   
 }
 