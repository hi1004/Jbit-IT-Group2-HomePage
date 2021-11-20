'use strict';

const toggle = document.querySelector('.toggle');
const closeBtn = document.querySelector('.close');
const container = document.querySelector('.signin-container');
const imgContainer = document.querySelector('.img-container');

toggle.addEventListener('click', () => {
  container.classList.add('active');
  imgContainer.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  container.classList.remove('active');
  imgContainer.classList.remove('active');
});
