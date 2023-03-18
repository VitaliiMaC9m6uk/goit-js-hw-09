const formEl = document.querySelector('form');
formEl.addEventListener('submit', submitForm);
// let delayEl = 0;
// let stepEl = 0;
// let amountEl = 0;

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
//  createPromise(2, 2);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
  } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
  }
  })
  

  promise
  .then(value => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  
}


// setTimeout(() => {
  
// },)
// let steps = 0;
// const intervalId = setInterval(() => {
//   if (steps = 5) {
    
//   }
//   console.log('Hello');
// })


// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//     .then(r => r.json());  
// }
// fetchPokemonById(2000).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
//   console.log(pokemon.species.name);
// };
// function onFetchError(error) {
//   console.log('Це у блоці catch');
//   console.log(error);
// }