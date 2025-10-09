const bootText = document.getElementById("boot-text");
const loginContainer = document.getElementById("login-container");
const loginForm = document.getElementById("login-form");
const errorMsg = document.getElementById("error-msg");

const toggleBtn = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleBtn.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    toggleBtn.textContent = "Show";
  }
});

let bootLines = [
  "Booting King Labs Database...",
  "Loading experimental profiles...",
  "Initializing secure access protocols...",
  "System ready."
];

let i = 0;
function showNextLine() {
  if (i < bootLines.length) {
    bootText.textContent += "\n" + bootLines[i];
    i++;
    setTimeout(showNextLine, 1000);
  } else {
    setTimeout(() => {
      bootText.classList.add("hidden");
      loginContainer.classList.remove("hidden");
    }, 1000);
  }
}
showNextLine();

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const password = passwordInput.value;
  if (password === "hizumisucks") {
    window.location.href = "main.html";
  } else {
    errorMsg.textContent = "Incorrect password. Try again.";
  }
});
