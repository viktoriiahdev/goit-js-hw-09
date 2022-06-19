import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({
        position: position,
        delay: delay,
      });
    } else {
      reject({
        position: position,
        delay: delay,
      });
    }
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let {
    elements: { delay, step, amount },
  } = e.target;

  delayValue = Number(delay.value);
  stepValue = Number(step.value);

  for (let i = 1, delay = delayValue; i <= amount.value; i += 1, delay += stepValue) {
    setTimeout(() => {
      createPromise(i, delay)
        .then(({ position, delay }) => {
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }, delay);
  }
}
