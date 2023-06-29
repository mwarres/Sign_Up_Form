const passEl = document.getElementById("password");
const confirmPassEl = document.getElementById("conf_password");

passEl.addEventListener("input", checkPasswordMatch);
confirmPassEl.addEventListener("input", checkPasswordMatch);

function checkPasswordMatch() {
    const pass = passEl.value;
    const confirmPass = confirmPassEl.value;
    const submitButton = document.querySelector("button");

    if (pass === confirmPass) {
        passEl.classList.remove("mismatch");
        passEl.classList.add("match");
        confirmPassEl.classList.remove("mismatch");
        confirmPassEl.classList.add("match");
        submitButton.disabled = false;
    } else {
        passEl.classList.remove("match");
        passEl.classList.add("mismatch");
        confirmPassEl.classList.remove("match");
        confirmPassEl.classList.add("mismatch");
        submitButton.disabled = true;
    }
}
