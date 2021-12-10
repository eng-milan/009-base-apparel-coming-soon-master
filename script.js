document.getElementById("email-submit-btn").addEventListener("click", function () {
    const emailInput = document.querySelector(".email-input");
    const alertIcon = document.querySelector(".fa-exclamation-circle");
    const alertMessage = document.querySelector(".alert-message");
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(emailInput.value) === false) {
        alertIcon.classList.add("alert-icon")
        alertMessage.classList.add("alert-message-visible")
    } else {
        alertIcon.classList.remove("alert-icon")
        alertMessage.classList.remove("alert-message-visible")
    }
    console.log(regExp.test(emailInput.value));
})