import Notiflix from 'notiflix';
const formEl = document.querySelector('form');
formEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const {
    elements:{delay, step, amount}
  } = event.currentTarget;
  let delayEl = Number(delay.value);
  let stepEl = Number(step.value);
  let amountEl = Number(amount.value);
  let positionEl = 1;
  setTimeout(() => {
    createPromise(positionEl, delay.value)
    setInterval(() => {
      positionEl += 1;
      if (positionEl <= amountEl) {
        
        delayEl += stepEl;
        createPromise(positionEl, delayEl)
      }
      }, step.value)      
  }, delay.value);
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
    resolve(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
  } else {
    reject(Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
  }
  })
  

  promise
    .then(value => {
    value;
  })
  .catch(error => {
    error;
  })
  
}