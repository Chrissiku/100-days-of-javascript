import "./styles/main.scss";

const showRules = document.getElementById("rules-btn");
const closeRules = document.getElementById("close-btn");
const rulesSideNav = document.getElementById("rules");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

showRules.addEventListener("click", () => rulesSideNav.classList.add("show"));
closeRules.addEventListener("click", () =>
  rulesSideNav.classList.remove("show")
);

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10,
  speed: 4,
  dx: 4,
  dy: -4,
  visible: true,
};

const paddle = {
  x: canvas.width / 2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0,
  visible: true,
};
