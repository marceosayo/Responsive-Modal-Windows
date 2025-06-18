"use strict";

const signUpContainer = document.querySelector("#signUpContainer");
const signInContainer = document.querySelector("#signInContainer");
const newsletterContainer = document.querySelector("#newsletterContainer");
const discountContainer = document.querySelector("#discountContainer");
const leavingContainer = document.querySelector("#leavingContainer");
const signUpForm = document.querySelector("#signUpForm");
const signInForm = document.querySelector("#signInForm");
const newsletterForm = document.querySelector("#newsletterForm");
const discountForm = document.querySelector("#discountForm");
const leavingForm = document.querySelector("#leavingForm");
const userIcon = document.querySelector("#userIcon i");
const signInIcon = document.querySelector("#signInIcon i");
const mailIcon = document.querySelector("#mailIcon i");
const discountIcon = document.querySelector("#discountIcon i");
const leavingIcon = document.querySelector("#leavingIcon i");
const close = document.querySelector("#close i");
const closeSignUp = document.querySelector("#closeSignUp");
const closeSignIn = document.querySelector("#closeSignIn");
const closeNewsletter = document.querySelector("#closeNewsletter");
const closeDiscount = document.querySelector("#closeDiscount");
const closeLeaving = document.querySelector("#closeLeaving");
const signUpTab = document.querySelector("#signUpTab");
const signInTab = document.querySelector("#signInTab");
const newsletterTab = document.querySelector("#newsletterTab");
const discountTab = document.querySelector("#discountTab");
const leavingTab = document.querySelector("#leavingTab");
const submitButton = document.querySelector("#submit");
const signInButton = document.querySelector("#signInButton");
const subscribeButton = document.querySelector("#subscribe");
const discountButton = document.querySelector("#discountButton");
const leavingButtonYes = document.querySelector("#leavingButtonYes");
const leavingButtonNo = document.querySelector("#leavingButtonNo");
const thanksForSubscribing = `Subscribed &hearts;<br>Check your inbox for weekly news.`;
const signUpMessage = `Welcome &hearts;<br>Please check your inbox for verification email.`;
const signInMessage = `<i class="fa-solid fa-spinner fa-spin-pulse"></i>\nLoading...`;
const discountMessage = `Check your inbox for your 20% OFF promo code! &hearts;\n`;
const leavingMessage = `<i class="fa-solid fa-spinner fa-spin-pulse"></i>\nSee ya!`;

// makes icons bounce when hovered over
userIcon.addEventListener("mouseover", function () {
  userIcon.classList.add("fa-bounce");
});

userIcon.addEventListener("mouseleave", function () {
  userIcon.classList.remove("fa-bounce");
});

signInIcon.addEventListener("mouseover", function () {
  signInIcon.classList.add("fa-bounce");
});

signInIcon.addEventListener("mouseleave", function () {
  signInIcon.classList.remove("fa-bounce");
});

mailIcon.addEventListener("mouseover", function () {
  mailIcon.classList.add("fa-bounce");
});

mailIcon.addEventListener("mouseleave", function () {
  mailIcon.classList.remove("fa-bounce");
});

discountIcon.addEventListener("mouseover", function () {
  discountIcon.classList.add("fa-bounce");
});

discountIcon.addEventListener("mouseleave", function () {
  discountIcon.classList.remove("fa-bounce");
});

leavingIcon.addEventListener("mouseover", function () {
  leavingIcon.classList.add("fa-bounce");
});

leavingIcon.addEventListener("mouseleave", function () {
  leavingIcon.classList.remove("fa-bounce");
});

// close out of containers
closeSignIn.addEventListener("click", function () {
  signInContainer.style.display = "none";
  signInTab.style.display = "flex";
});

closeSignUp.addEventListener("click", function () {
  signUpContainer.style.display = "none";
  signUpTab.style.display = "flex";
});

closeNewsletter.addEventListener("click", function () {
  newsletterContainer.style.display = "none";
  newsletterTab.style.display = "flex";
});

closeDiscount.addEventListener("click", function () {
  discountContainer.style.display = "none";
  discountTab.style.display = "flex";
});

closeLeaving.addEventListener("click", function () {
  leavingContainer.style.display = "none";
  leavingTab.style.display = "flex";
});

// open containers
signInTab.addEventListener("click", function () {
  signInContainer.style.display = "block";
  signInTab.style.display = "none";
});

signUpTab.addEventListener("click", function () {
  signUpContainer.style.display = "block";
  signUpTab.style.display = "none";
});

newsletterTab.addEventListener("click", function () {
  newsletterContainer.style.display = "block";
  newsletterTab.style.display = "none";
});

discountTab.addEventListener("click", function () {
  discountContainer.style.display = "block";
  discountTab.style.display = "none";
});

leavingTab.addEventListener("click", function () {
  leavingContainer.style.display = "block";
  leavingTab.style.display = "none";
});

// click sign up button
submitButton.addEventListener("click", function (e) {
  if (!signUpForm.checkValidity()) {
    e.preventDefault();
    signUpForm.reportValidity();
  } else {
    signUpContainer.style.color = "white";
    signUpContainer.style.padding = "4rem";
    signUpContainer.style.transition = "1s ease";
    signUpContainer.style.textAlign = "center";
    signUpContainer.style.fontSize = "1.1rem";
    signUpContainer.innerHTML = signUpMessage;
  }
});

// click sign in button
signInButton.addEventListener("click", function (e) {
  if (!signInForm.checkValidity()) {
    e.preventDefault();
    signInForm.reportValidity();
  } else {
    signInContainer.style.color = "white";
    signInContainer.style.transition = "1s ease";
    signInContainer.style.padding = "4rem";
    signInContainer.style.textAlign = "center";
    signInContainer.style.fontSize = "1.1rem";
    signInContainer.innerHTML = signInMessage;
  }
});

// click subscribe button
subscribeButton.addEventListener("click", function (e) {
  if (!newsletterForm.checkValidity()) {
    e.preventDefault();
    newsletterForm.reportValidity();
  } else {
    newsletterContainer.style.color = "white";
    newsletterContainer.style.padding = "4rem";
    newsletterContainer.style.transition = "1s ease";
    newsletterContainer.style.textAlign = "center";
    newsletterContainer.style.fontSize = "1.1rem";
    newsletterContainer.innerHTML = thanksForSubscribing;
  }
});

// click discount button
discountButton.addEventListener("click", function (e) {
  if (!discountForm.checkValidity()) {
    e.preventDefault();
    discountForm.reportValidity();
  } else {
    discountContainer.style.color = "white";
    discountContainer.style.padding = "4rem";
    discountContainer.style.transition = "1s ease";
    discountContainer.style.textAlign = "center";
    discountContainer.style.fontSize = "1.1rem";
    discountContainer.innerHTML = discountMessage;
  }
});

// click leaving button YES
leavingButtonYes.addEventListener("click", function (e) {
  leavingContainer.style.color = "white";
  leavingContainer.style.padding = "4rem";
  leavingContainer.style.transition = "1s ease";
  leavingContainer.style.textAlign = "center";
  leavingContainer.style.fontSize = "1.1rem";
  leavingContainer.innerHTML = leavingMessage;
});

// click leaving button NO
leavingButtonNo.addEventListener("click", function (e) {
  leavingContainer.style.display = "none";
  leavingTab.style.display = "flex";
});
