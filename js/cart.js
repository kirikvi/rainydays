const form = document.querySelector("#form");
const userName = document.querySelector("#user-name");
const address = document.querySelector("#address");
const postalCode = document.querySelector("#postalcode");
const city = document.querySelector("#city");
const email = document.querySelector("#user-email");
const confirmButton = document.querySelector("button");

form.addEventListener("submit", e => {
	e.preventDefault();
	
	controlInputs();
});

function controlInputs() {
	const nameValue = userName.value.trim();
    const addressValue = address.value.trim();
	const postalCodeValue = postalCode.value.trim();
    const cityValue = city.value.trim();
	const emailValue = email.value.trim();	
	
	if(nameValue === "") {
		setErrorFor(userName, "Required field");
	} else {
		setSuccessFor(userName);
	}

    if(addressValue === "") {
		setErrorFor(address, "Required field");
	} else {
		setSuccessFor(address);
	}
	
	if(postalCodeValue === "") {
		setErrorFor(postalCode, "Required field");
	} else {
		setSuccessFor(postalCode);
	}

    if(cityValue === "") {
		setErrorFor(city, "Required field");
	} else {
		setSuccessFor(city);
	}
	
	if(emailValue === "") {
		setErrorFor(email, "Required field");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

    confirmButton.onclick = function(){
        if((nameValue) && (addressValue) && (postalCodeValue) && (cityValue) &&(emailValue)) {
            location.href = "https://rainydays-kirikvi.netlify.app/order_confirmation.html";
        } else {
            console.log("Not Yet");
        }
    }
}

function setErrorFor(input, message) {
	const formItem = input.parentElement;
	const small = formItem.querySelector("small");
	formItem.className = "form-item error";
	small.innerText = message;
}

function setSuccessFor(input) {
	const formItem = input.parentElement;
	formItem.className = "form-item success";
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

