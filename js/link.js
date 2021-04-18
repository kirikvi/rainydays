const href = "https://kvistnes.one/wp-json/wc/store/products";
const button = document.querySelector(".cart-total");

async function sendCorrect() {
    try {
      const productSearch = await fetch(href);
      const products = await productSearch.json();
      console.log(products);

      for(let i = 0; i < products.length; i++){

        button.innerHTML = 
          `<hr></hr>
          <p class="p-bold">TOTAL NOK 1799</p>
          <hr></hr>
          <a href="jacket_page.html?id=${products[i].id}" class="c-shopping">Continue Shopping</a>`;
      }
    }

    catch(error){
        console.log(error);
    }

    finally{
        console.log(finally);
    }
}
sendCorrect();
