import './styles/main.css';
import data from './data.js';

const openNav = document.querySelector('#toggle');
const navbar = document.getElementById('navbar');
const toggleIcon = document.querySelector('.fa-bars');
const main = document.querySelector('main');

const closeNavbar = (e) => {
  if (
    document.body.classList.contains('show-nav')
    && e.target !== openNav
    && !openNav.contains(e.target)
    && e.target !== navbar
    && !navbar.contains(e.target)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
};

openNav.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  toggleIcon.classList.toggle('fa-times');
  document.body.addEventListener('click', closeNavbar);
});

// Create project boxes
const createBox = (item) => {
  const box = document.createElement('div');
  const { image, link, source } = item;
  box.classList.add('box');
  box.innerHTML = `
    <img src="${image}" alt="project image" />
    <p class="info"><a href=${source} target="_blank">Source</a> <a href=${link} target="_blank">Live</a></p>
  `;
  main.appendChild(box);
};

data.forEach(createBox);
