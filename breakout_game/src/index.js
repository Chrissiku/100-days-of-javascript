import './styles/main.scss';

const showRules = document.getElementById('rules-btn');
const closeRules = document.getElementById('close-btn');
const rulesSideNav = document.getElementById('rules');

showRules.addEventListener('click', () => rulesSideNav.classList.add('show'));
closeRules.addEventListener('click', () => rulesSideNav.classList.remove('show'));
