function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "password123") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html";  // Redirect to home page
    } else {
        alert("Invalid username or password!");
    }
}
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hardcoded credentials for testing (Replace with database validation later)
    if (username === "Rithika" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true"); // Store login session
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid username or password!"); // Show error message
    }
});
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event) {
        const target = this.getAttribute("href");
        if (target !== "#") {
            window.location.href = target;  // ✅ Navigates to the correct page
        }
    });
});

