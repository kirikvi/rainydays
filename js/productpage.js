const detailContainer = document.querySelector(".specific-jacket-container");
const title = document.querySelector("title");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");
console.log(id);

const jacketUrl = `https://kvistnes.one/wp-json/wc/store/products/${id}`;

async function fetchJacket(){
    try {
        const fetchUrl = await fetch(jacketUrl);
        const jacket = await fetchUrl.json();
        console.log(jacket);

    title.innerHTML = jacket.name;

        detailContainer.innerHTML += `
            <div class="specific-jacket-item">
                <img src="${jacket.images[0].src}"
                alt="${jacket.description}"/>
            </div>
        
            <div class="specific-jacket-item">
                <h1>Detailed information about the jacket</h1>
                <h3 class="specific-heading">${jacket.name}</a></h3>
                <p>${jacket.description}</p>
                <ul>
                    <li class="specs">Waterproof</li>
                    <li class="specs">Windproof</li>
                    <li class="specs">High Visibility</li>
                    <li class="specs">Lifetime Warranty</li>
                </ul>
            </div>
             
            <div class="specific-jacket-item-form"> 
            <div class="colour">
               <p class="p-bold">Colour</p>
               <p class="p-description">Orange/Blue</p>
            </div>
            <form class="jacket-form"> 
               <span class="size">SIZE</span>
               <input type="radio" name="size" value="small" ID="small">
               <label for="small">S</label>
               <input type="radio" name="size" value="medium" ID="medium">
               <label for="medium">M</label>
               <input type="radio" name="size" value="large" ID="large">
               <label for="large">L</label>
               <input type="radio" name="size" value="xlarge" ID="xlarge">
               <label for="xlarge">XL</label>
               <p class="p-bold">PRICE £${jacket.prices.price}</p>
            </form>
             
            <label for="addtocart" class="addtocart">Add to Cart</label>
            <input type="checkbox" id="addtocart">

            <section class="cart">
                <div class="addedtocart_popup">
                    <div class="popup-heading">
                        <p>Added to cart</p>
                        <hr class="hr-pop"></hr>
                    </div>
                    <div class="popup-content1">
                        <img src="${jacket.images[0].src}"
                        alt="${jacket.description}" class="specific-img-pop"/>
                    </div>
                    <div class="popup-content2">
                        <h3>${jacket.name}</h3>
                        <div class="line">
                            <p class="p-bold">colour</p>
                            <p class="p-description">Orange/Blue</p>
                        </div>
                        <div class="line">
                            <p class="p-bold">size</p>
                            <p class="p-description">X</p>
                        </div>
                    </div>  
                    <div class="popup-content3">
                        <hr class="hr-pop"></hr>
                        <p class="p-bold-total">TOTAL</p>
                        <p class="p-bold-price"> £${jacket.prices.price}</p>
                        <hr class="hr-pop"></hr>
                        <a href="jacket_page.html"><input type="submit" value="Close" class="continue_shopping"></a>
                        <a href="shopping-cart.html"><input type="submit" value="Go to checkout" class="addtocart-a"></a>
                    </div>
                </div>
            </section>`;
    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = `<h2>Oops.. Something went wrong!</h2>`;
    }
    finally {
        console.log("finally");
    }
}
fetchJacket(); 