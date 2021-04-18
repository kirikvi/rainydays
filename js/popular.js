const productsUrl = "https://kvistnes.one/wp-json/wc/store/products";
const popularContainer = document.querySelector("#popular");

async function fetchPopular() {
    try {
      const findProduct = await fetch(productsUrl);
      const popularProduct = await findProduct.json();

      for(let i = 0; i < popularProduct.length; i++){
        console.log(popularProduct[i].categories[0].id);

        const categoryId = popularProduct[i].categories[0].id;

        /*function isTopSeller(category){
            if(category === 16){
                return true;
            } else {
                return false;
            }
        }*/

        if(categoryId === 16){
            popularContainer.innerHTML += 
            `<div class="jacket-item">
            <a href="jacket_page.html?id=${popularProduct[i].id}" >
                <img class="yellow" src="${image}" alt="${popularProduct[i].description}"/>
                <h3>${popularProduct[i].name}</h3>
                <p>£ ${popularProduct[i].prices.price}</p>
            </a>
            </div>`;
        } else {
            console.log("not a top seller");
        }  
      }
    }
    catch(error) {
      console.log("error");
      popularContainer.innerHTML = `<h3>Failed to load jackets. Please try again later</h3>`
    }
    finally {
      console.log("finally");
    }
}
fetchPopular();


