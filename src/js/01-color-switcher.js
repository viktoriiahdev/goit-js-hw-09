
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
}

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStart);
refs.stopBtn.addEventListener('click', onStop);

let intervalID;

function onStart() {
    intervalID = setInterval(()=>document.body.style.backgroundColor = getRandomHexColor(),1000)
    refs.stopBtn.disabled = false;
    refs.startBtn.disabled = true;
}

function onStop() {
    clearInterval(intervalID);
    refs.stopBtn.disabled = true;
    refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}