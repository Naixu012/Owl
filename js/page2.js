let attempts = 0;
let modalShown = false;

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const passwordHint = document.getElementById("passwordHint");
    const errorMessage = document.getElementById("errorMessage");
    const hintModal = document.getElementById("hintModal");
    const okButton = document.getElementById("okButton");

    const validPassword = "4112005"; 

    if (password !== validPassword) {
        attempts++; 
        errorMessage.style.display = "block";

        errorMessage.style.opacity = 0;
        setTimeout(() => {
            errorMessage.style.transition = "opacity 0.5s";
            errorMessage.style.opacity = 1;
        }, 10);

        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 1800);

        if (attempts >= 3 && !modalShown) {
            hintModal.style.display = "flex"; 
            modalShown = true; 
        }
    } else {
        errorMessage.style.display = "none";
        passwordHint.classList.remove("show");
        alert("Ấn OK tiếp nha!");
        attempts = 0; 
        modalShown = false; 
        window.location.href = "page3.html";
    }
});

document.getElementById("okButton").addEventListener("click", function () {
    hintModal.style.display = "none";
    document.getElementById("passwordHint").classList.add("show");
});
