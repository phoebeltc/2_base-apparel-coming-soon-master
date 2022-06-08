const form = document.querySelector("form");
const email = document.querySelector("#einput");
const warning = document.querySelector(".warning");
const errorIcon = document.querySelector(".error-icon");

const emailIsValid = (email) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
} 

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailValue = email.value;

    if (emailIsValid(emailValue)) {
        warning.classList.add("hide");
        errorIcon.classList.add("hide");
    } else {
        warning.classList.remove("hide");
        errorIcon.classList.remove("hide");
    }
} )
