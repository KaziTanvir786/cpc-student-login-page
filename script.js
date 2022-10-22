var emailFeild = document.getElementById("input-email");
var passFeild = document.getElementById("input-pass");
// var emailIcon = document.getElementById("email-icon");
// var passIcon = document.getElementById("pass-icon");
var warnIconEmail = document.getElementById("warn-icon-email");
var checkIconEmail = document.getElementById("check-icon-email");
var warnIconPass = document.getElementById("warn-icon-pass");
var checkIconPass = document.getElementById("check-icon-pass");
var loginBtn = document.getElementById("id-login-btn");

var emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;

var isEmailValid = false;
var isPassValid = false;

function validateEmail() {
    if (emailFeild.value == "") {
        // emailFeild.style.border = "none";
        // emailIcon.style.color = "grey";
        // emailFeild.style.backgroundColor = "white";
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "none";
        isEmailValid = false;
    }
    else if (!emailFeild.value.match(emailRegex)) {
        // emailFeild.style.backgroundColor = "#b83838";
        // emailFeild.style.color = "white";
        // emailIcon.style.color = "white";
        emailFeild.style.boxShadow = "0px 0px 20px red";
        warnIconEmail.style.display = "inline";
        checkIconEmail.style.display = "none";
        isEmailValid = false;
    }
    else {
        // emailFeild.style.backgroundColor = "#32a345";
        // emailFeild.style.color = "white";
        // emailIcon.style.color = "white";
        emailFeild.style.boxShadow = "none";
        warnIconEmail.style.display = "none";
        checkIconEmail.style.display = "inline";
        isEmailValid = true;
    }
}

function validatePass() {
    if (passFeild.value == "") {
        // passFeild.style.border = "none";
        // passIcon.style.color = "grey";
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "none";
        isPassValid = false;
    }
    else if (!passRegex.test(passFeild.value)) {
        // passFeild.style.backgroundColor = "#b83838";
        // passFeild.style.color = "white";
        // passIcon.style.color = "white";
        passFeild.style.boxShadow = "0px 0px 20px red";
        warnIconPass.style.display = "inline";
        checkIconPass.style.display = "none";
        isPassValid = false;
    }
    else {
        // passFeild.style.backgroundColor = "#32a345";
        // passFeild.style.color = "white";
        // passIcon.style.color = "white";
        passFeild.style.boxShadow = "none";
        warnIconPass.style.display = "none";
        checkIconPass.style.display = "inline";
        isPassValid = true;
    }
}

// Add some codes to check the captcha also in this function
emailFeild.oninput = function () {
    validateEmail();
    if (isEmailValid && isPassValid) {
        loginBtn.disabled = false;
    }
    else {
        loginBtn.disabled = true;
    }
}

// Add some codes to check the captcha also in this function
passFeild.oninput = function () {
    validatePass();
    if (isEmailValid && isPassValid) {
        loginBtn.disabled = false;
    }
    else {
        loginBtn.disabled = true;
    }
}