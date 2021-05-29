const review1 = {
    id: "Jessica",
    product: "Yellow Jacket",
    review: "Just what I needed for my hike.",
    date: "10.03.21",
 }   

 const review2 = {
    id: "Adam",
    product: "Green Jacket",
    review: "Kept me dry on my trip to Bergen. That speaks for itself!", 
    date: "28.01.21",
}   

 const review3 = {
    id: "Tatiana",
    product: "Yellow Jacket",
    review: "If you're looking for a new jacket, this is it! Stop looking and buy this one.", 
    date: "05.03.21", 
 } 

 const review4 = {
    id: "Thomas",
    product: "Orange Jacket",
    review: "I would recommend going down a size. Other than the jacket being a bit big, I'm happy.", 
    date: "24.02.21", 
}   

 const reviews = [review1, review2, review3, review4];

 const reviewsContainer = document.querySelector(".reviews");

 reviewsContainer.innerHTML = "";

 for(let i = 0; i < reviews.length; i++){
    
     reviewsContainer.innerHTML += `<div class="review-item">
                                <time>${reviews[i].date}</time>
                                <p style="color: gray">${reviews[i].product}</p>
                                <p>"${reviews[i].review}"</p>
                                <h3>- ${reviews[i].id}</h3>
                                </div>`;                                   
 }
 