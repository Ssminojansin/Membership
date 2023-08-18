const users = [];

function signup() {
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    users.push({ username, password });

    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
}

function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        document.getElementById("login-message").textContent = "Giriş başarılı!";
    } else {
        document.getElementById("login-message").textContent = "Kullanıcı adı veya şifre hatalı!";
    }
}