const form = document.querySelector(".message-form");
const aName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#e-mail");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
//const confirmation = document.querySelector(".confirmation");
const charCounter = document.querySelector(".char-counter");
const button = document.querySelector("button");

function validateForm(){
    event.preventDefault();

    if(validateLen(aName.value, 0)){
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(validateEmail(email.value, 0)){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if(validateLen(message.value, 0)){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
    }
}
form.addEventListener("submit", validateForm);

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
    if(validateLen(aName.value, 0) && validateLen(message.value, 500) && validateEmail(email.value, 0)){
        confirmation.style.display = "block";
    } else {
        confirmation.style.display = "none";
    }
}