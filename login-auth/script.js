function register() {
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value.trim();

  if (username && password) {
    localStorage.setItem("user", username);
    localStorage.setItem("pass", password);
    alert("Registered successfully!");
    document.getElementById("reg-username").value = '';
    document.getElementById("reg-password").value = '';
  } else {
    alert("Please enter both username and password.");
  }
}

function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const storedUser = localStorage.getItem("user");
  const storedPass = localStorage.getItem("pass");

  if (username === storedUser && password === storedPass) {
    document.getElementById("user-name").textContent = username;
    document.getElementById("login-box").style.display = "none";
    document.getElementById("register-box").style.display = "none";
    document.getElementById("secure-box").style.display = "block";
  } else {
    alert("Invalid credentials!");
  }
}

function logout() {
  document.getElementById("secure-box").style.display = "none";
  document.getElementById("login-box").style.display = "block";
  document.getElementById("register-box").style.display = "block";
}
