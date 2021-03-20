const form = document.querySelector(".message-form");
const email = document.querySelector("#e-mail");
const emailError = document.querySelector("#email-error");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error");
const confirmation = document.querySelector(".confirmation");
const button = document.querySelector("button");

function validateForm(){
    event.preventDefault();

    if(validateEmail(email.value, 0)){
        emailError.style.display = "none";
    } else {
        emailError.style.display = "inline";
    }

    if(validateLen(message.value, 0)){
        messageError.style.display = "none";
    } else {
        messageError.style.display = "inline";
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

function validationSuccess(){
    console.log("test");
    if(validateLen(message.value, 500) && validateEmail(email.value, 0)){
        confirmation.style.display = "inline";
        console.log("success");
    } else {
        confirmation.style.display = "none";
        console.log("no success");
    }
}
button.onclick = validationSuccess();