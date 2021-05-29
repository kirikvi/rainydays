const productUrl = "https://kvistnes.one/wp-json/wc/store/products";
const men = document.querySelector(".jacket-container-men");

async function fetchProducts() {
    try {
      const productSearch = await fetch(productUrl);
      const products = await productSearch.json();

      for(let i = 0; i < products.length; i++){
        const image = products[i].images[0].src;

        if(products[i].on_sale){
            men.innerHTML += 
            `<div class="jacket-item">
            <a href="jacket_page.html?id=${products[i].id}" >
              <img class="yellow" src="${image}" alt="${products[i].description}"/>
              <h3>${products[i].name}</h3>
              <p style="text-decoration: line-through">£${products[i].prices.regular_price}</p>
              <p style="color: white; background-color: red; border-radius: 5px;">ON SALE    £${products[i].prices.price}</p>
            </a>
          </div>`;
        } else{
           men.innerHTML += 
          `<div class="jacket-item">
            <a href="jacket_page.html?id=${products[i].id}" >
              <img class="yellow" src="${image}" alt="${products[i].description}"/>
              <h3>${products[i].name}</h3>
              <p>£${products[i].prices.price}</p>
            </a>
          </div>`;
        }        
      }
    }

    catch(error) {
      console.log("error");
      men.innerHTML = `<h3>Failed to load jackets. Please try again later</h3>`
    }

    finally {
      console.log("finally");
    }
}
fetchProducts();
