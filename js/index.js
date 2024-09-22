const finalLoginForm = document.querySelector(".login")
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const mainPage = document.querySelector(".mainPage");
const greeting = document.querySelector("#greeting");
const clock = document.querySelector(".clock");
const todo = document.querySelector(".todo");
const more = document.querySelector(".more-info");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    finalLoginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username)
}

function whatTime(username) {
    const date = new Date();
    const hours = date.getHours();
    if (hours > 4 && hours < 13) {
        return `Good Morning ${username}!`
    }
    else if (hours > 12 && hours < 18) {
        return `Good Afternoon ${username}!`
    }
    else {
        return `Good Evening ${username}!`
    }
}

function paintGreetings(username) {
    greeting.innerText = whatTime(username);
    mainPage.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    more.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    finalLoginForm.classList.add(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    more.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername)
}