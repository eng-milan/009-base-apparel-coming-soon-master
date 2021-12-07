document.getElementById("email-submit-btn").addEventListener("click", function () {
    const alertIcon = document.querySelector(".fa-exclamation-circle");
    const emailInput = document.querySelector(".email-input");
    const alertMessage = document.querySelector(".alert-message");
    if (emailInput.value.match("@") === null) {
        alertIcon.classList.add("alert-icon")
        alertMessage.classList.add("alert-message-visible")
    } else {
        alertIcon.classList.remove("alert-icon")
        alertMessage.classList.remove("alert-message-visible")
    }
})