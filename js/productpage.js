const detailContainer = document.querySelector(".specific-jacket-container");
const title = document.querySelector("title");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

const jacketUrl = `https://kvistnes.one/wp-json/wc/store/products/{id}`;

async function fetchJacket(){
    try {
        const fetchUrl = await fetch(jacketUrl);
        const jacketArray = await fetchUrl.json();
        console.log(jacketArray);

    /*title.innerHTML = drink.strDrink;

        const ingredient3 = drink.strMeasure3 + drink.strIngredient3
        const ingredient4 = drink.strMeasure4 + drink.strIngredient4
        const ingredient5 = drink.strMeasure5 + drink.strIngredient5

        let ing3Value = "-";

        if(ingredient3){
            ing3Value = ingredient3;
        }

        let ing4Value = "-";

        if(ingredient4){
            ing4Value = ingredient4;
        }

        let ing5Value = "-";

        if(ingredient5){
            ing5Value = ingredient5;
        }


        detailContainer.innerHTML = `<h1>${drink.strDrink}</h1>
                                <img class="thumbnail" src="${drink.strDrinkThumb}" alt="${drink.strDrink}"</div>
                                <h2>Ingredients</h2>
                                <ul>
                                    <li>${drink.strMeasure1} ${drink.strIngredient1}</li>
                                    <li>${drink.strMeasure2} ${drink.strIngredient2}</li>
                                    <li>${ing3Value}</li>
                                    <li>${ing4Value}</li>
                                    <li>${ing5Value}</li>
                                </ul> 
                                <h3>Instructions:</h3> 
                                <p>${drink.strInstructions}</p>
                                <p>This drink is a ${drink.strCategory}. Serve it in a ${drink.strGlass}.</p>
                                </a>`;*/
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