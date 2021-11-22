'use strict';

const toggle = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.signin-container');
const imgContainer = document.querySelector('.img-container');
const registerName = document.querySelector('#register-user-name');
const registerPassword = document.querySelector('#register-user-password');
const registerRepeatPassword = document.querySelector('#register-repeat-user-password');
const signinName = document.querySelector('#user-name');

console.log(registerName);
toggle.addEventListener('click', () => {
  container.classList.add('active');
  imgContainer.classList.add('active');
  setTimeout(() => {
    registerName.focus();
  }, 600);
  registerName.value = '';
  registerPassword.value = '';
  registerRepeatPassword.value = '';
});

closeBtn.addEventListener('click', () => {
  container.classList.remove('active');
  imgContainer.classList.remove('active');
  signinName.focus();
});
