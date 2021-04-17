const productUrl = "http://kvistnes.one/wp-json/wc/store/products";

const productContainer = document.querySelector(".jacket-container");

async function fetchProducts() {

    try {
      const productSearch = await fetch(productUrl);
      const products = await productSearch.json();
      console.log(products);  

      for(let i = 0; i < products.length; i++){
        console.log(products[i].name);

        productContainer.innerHTML += 
          `<div class="jacket-item">
            <a href="jacket_page.html?id=${products[i].id}" >
              <img class="yellow" src="${products[i].images.src}" alt="${products[i].description}"/>
              <h3>${products[i].name}</h3>
              <p>£ ${products[i].prices.price}</p>
            </a>
          </div>`;
      }
    }

    catch(error) {
      console.log("error");
      productContainer.innerHTML = `<h3>Failed to load jackets. Please try again later</h3>`
    }

    finally {
      console.log("finally");
    }
}
fetchProducts();
