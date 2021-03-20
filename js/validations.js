const form = document.querySelector(".message-form");
const email = document.querySelector("#e-mail");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const confirmation = document.querySelector(".confirmation");
const button = document.querySelector(".message-submit");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	validateForm();
});

function validateForm(){

    if(validateEmail(email.value, 0)){
        emailError.style.visibility = "hidden";
    } else {
        emailError.style.visibility = "visible";
        emailError.innerText = "Must be a valid e-mail address";
    }

    if(validateLen(message.value, 4)){
        messageError.style.visibility = "hidden";
    } else {
        messageError.style.visibility = "visible";
        messageError.innerText = "Your message must contain 5 characters or more";
    }
}

function validateLen(value, len){
    if (value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matching = regEx.test(email);
    return matching;
}

button.onclick = function(){
    if(validateLen(message.value, 4) && validateEmail(email.value, 0)){
        alert("Message sent!");
    } else {
        console.log("Not yet");
    }
}