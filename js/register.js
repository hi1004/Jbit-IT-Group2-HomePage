'use strict';

const toggle = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.signin-container');

toggle.addEventListener('click', () => {
  container.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  container.classList.remove('active');
});
