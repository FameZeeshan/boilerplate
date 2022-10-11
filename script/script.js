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

// // Events:-
// // AddEventListener:
// formEl.addEventListener("submit", function (event) {
//   event.preventDefault();
//   if (usernameEl.value === "") {
//     const formControlEl = usernameEl.parentElement;
//     formControlEl.classList.add("error");
//   } else {
//     const formControlEl = usernameEl.parentElement;
//     formControlEl.classList.add("success");
//   }

//   if (emailEl.value === "") {
//     const formControlEl = emailEl.parentElement;
//     formControlEl.classList.add("error");
//   } else {
//     const formControlEl = emailEl.parentElement;
//     formControlEl.classList.add("success");
//   }

//   if (mobileEl.value === "") {
//     const formControlEl = mobileEl.parentElement;
//     formControlEl.classList.add("error");
//   } else {
//     const formControlEl = mobileEl.parentElement;
//     formControlEl.classList.add("success");
//   }

//   if (newPasswordEl.value === "") {
//     const formControlEl = newPasswordEl.parentElement;
//     formControlEl.classList.add("error");
//   } else {
//     const formControlEl = newPasswordEl.parentElement;
//     formControlEl.classList.add("success");
//   }

//   if (confirmPasswordEl.value === "") {
//     const formControlEl = confirmPasswordEl.parentElement;
//     formControlEl.classList.add("error");
//   } else {
//     const formControlEl = confirmPasswordEl.parentElement;
//     formControlEl.classList.add("success");
//   }
// });
const inputElArray = [
  usernameEl,
  emailEl,
  mobileEl,
  newPasswordEl,
  confirmPasswordEl,
];
const showError = function (el, message) {
  const formControlEl = el.parentElement;
  formControlEl.className = "form-control error";
  const smallEl = formControlEl.querySelector("small");
  smallEl.textContent = message;
};

const showSuccess = function (el) {
  const formControlEl = el.parentElement;
  formControlEl.className = "form-control success";
};

const checkRequired = function (arr) {
  for (const el of arr) {
    if (el.value === "") {
      const formControlEl = el.parentElement;
      formControlEl.classList.add("error");
    } else {
      const formControlEl = el.parentElement;
      formControlEl.classList.add("success");
    }
  }
};
const checkLength = function (el, min, max) {
  if (el.value.length < min) {
    const formControlEl = el.parentElement;
    formControlEl.classList.add("error");
    const smallEl = formControlEl.querySelector("small");
    smallEl.textContent = `should have ${min} characters`;
  } else if (el.value.length > min) {
    const smallEl = formControlEl.querySelector("small");
    smallEl.textContent = `should not have more than ${min} characters`;
  }
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired(inputElArray);
  checkLength(usernameEl, 5, 12);
  checkLength(mobileEl, 10, 10);
  checkLength(newPasswordEl, 8, 15);
});
