import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

let intervalId = null;
let initTime = null;

refs.startBtn.addEventListener('click', () => {
  initTime = Date.now();

  intervalId = setInterval(() => {
    const dateNow = Date.now();
    const diff = dateNow - initTime;
    const obj = getTimeComponents(diff);
    renderTime(obj);
  }, 1000);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
});

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

function pad(value) {
  //7 => '07'
  return String(value).padStart(2, '0');
}

function renderTime({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
