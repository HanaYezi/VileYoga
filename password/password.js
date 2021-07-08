function checkPassword() {
    var password = document.getElementById("passwordBox");
    var passwordText = password.value;
    if(passwordText == "Bentley") {
        return true;
    }
    alert("password incorrect");
    return false;
}

