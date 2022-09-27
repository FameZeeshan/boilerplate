"use strict";
// This will give more power to JS , helps to ignore errors in JS

// selecting HTML Elements in JS
// Modifying the elements selected
// document.getElementById("title").textContent = "Fill the Form";
// Create and add elements in HTML using JS
// const newEl = document.createElement("h2");
// newEl.textContent = "Welcome to My Book";
// newEl.style.textAlign = "center";
// document.querySelector("#contain").appendChild(newEl);

// selecting HTML Elements in JS:
// document.querySelector("")
// document.getElementById("")
// Use classes for CSS and Id for Javascript

// document.getElementById("title").style.color = "pink";
// -----------------------xx--------------
// Select Elements:-
const formEl = document.getElementById("form");
const usernameEl = document.getElementById("username");
const emailEl = document.getElementById("email");
const mobileEl = document.getElementById("mobile");
const newPasswordEl = document.getElementById("new-password");
const confirmPasswordEl = document.getElementById("confirm-password");

// Events:-
// AddEventListener:
formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  if (usernameEl.value === "") {
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add("error");
  } else {
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add("success");
  }

  if (emailEl.value === "") {
    const formControlEl = emailEl.parentElement;
    formControlEl.classList.add("error");
  } else {
    const formControlEl = emailEl.parentElement;
    formControlEl.classList.add("success");
  }

  if (mobileEl.value === "") {
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add("error");
  } else {
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add("success");
  }

  if (newPasswordEl.value === "") {
    const formControlEl = newPasswordEl.parentElement;
    formControlEl.classList.add("error");
  } else {
    const formControlEl = newPasswordEl.parentElement;
    formControlEl.classList.add("success");
  }

  if (confirmPasswordEl.value === "") {
    const formControlEl = confirmPasswordEl.parentElement;
    formControlEl.classList.add("error");
  } else {
    const formControlEl = confirmPasswordEl.parentElement;
    formControlEl.classList.add("success");
  }
});
