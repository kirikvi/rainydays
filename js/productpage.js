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
               <p class="p-bold">£${jacket.prices.price}</p>
             </form>`;
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