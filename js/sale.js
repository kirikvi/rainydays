const saleUrl = "https://kvistnes.one/wp-json/wc/store/products";
const sale = document.querySelector(".jacket-container-sale");

async function fetchProducts() {
    try {
      const saleSearch = await fetch(saleUrl);
      const saleProduct = await saleSearch.json();
    
      for(let i = 0; i < saleProduct.length; i++){
        const image = saleProduct[i].images[0].src;

        if(saleProduct[i].on_sale){    
            sale.innerHTML += 
            `<div class="jacket-item">
                <a href="jacket_page.html?id=${saleProduct[i].id}" >
                <img class="yellow" src="${image}" alt="${saleProduct[i].description}"/>
                <h3>${saleProduct[i].name}</h3>
                <p style="text-decoration: line-through">£${saleProduct[i].prices.regular_price}</p>
              <p style="color: white; background-color: red; border-radius: 5px;">ON SALE £${saleProduct[i].prices.price}</p>
                </a>
            </div>`;
        } else {
            continue;
        }
      }
    }

    catch(error) {
      console.log(error);
      sale.innerHTML = `<h3>Failed to load jackets. Please try again later</h3>`
    }

    finally {
      console.log("finally");
    }
}
fetchProducts();
