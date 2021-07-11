const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreetings(savedUsername);
}
