const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let intervalId = null;

stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', clickInStartBtn);
stopBtnEl.addEventListener('click', clickInStopBtn);

function clickInStartBtn() {
    stopBtnEl.disabled = false;
    startBtnEl.disabled = true;
    intervalId = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
};
function clickInStopBtn() {
    clearInterval(intervalId);
    stopBtnEl.disabled = true;
    startBtnEl.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}