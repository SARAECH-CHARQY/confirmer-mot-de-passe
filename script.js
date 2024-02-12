function checkPassword() {
    let password = document.getElementById("password").value;
    let cfrm_password = document.getElementById("cfrm_password").value;
    let message = document.getElementById("message"); // Obtenir l'élément DOM

    if (password.length !== 0) {
        if (password === cfrm_password) {
            message.textContent = "Password match"; // Modifier le texte de l'élément
            message.style.color = "green"; // Modifier les styles de l'élément
        } else {
            message.textContent = "Password don't match";
            message.style.color = "red";
        }
    } else {
        alert("Password can't be empty");
    }
}
