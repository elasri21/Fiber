// Hide and show password
const eye = document.querySelector(".eye");
const password = document.querySelector(".password");
eye.addEventListener("click", function() {
    let type = password.getAttribute("type");
    password.type = type== "password" ? 'text' : "password";

})