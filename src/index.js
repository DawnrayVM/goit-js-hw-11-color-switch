import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  page: document.querySelector('body'),
  start: document.querySelector('button[data-action="start"]'),
  stop: document.querySelector('button[data-action="stop"]'),
};
refs.stop.disabled = true;
let intervalID = null;

const bgColorSwitch = function () {
  const getColorNumber = randomIntegerFromInterval(0, colors.length - 1);
  refs.page.setAttribute('style', `background: ${colors[getColorNumber]};`);
};

const colorSwitchHandler = function () {
  if (event.target === refs.start) {
    intervalID = setInterval(bgColorSwitch, 1000);
    refs.start.disabled = true;
    refs.stop.disabled = false;
  } else if (event.target === refs.stop) {
    clearInterval(intervalID);
    refs.start.disabled = false;
    refs.stop.disabled = true;
  }
};

refs.page.addEventListener('click', colorSwitchHandler);
