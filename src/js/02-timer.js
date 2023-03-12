import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const startBtn = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let pickDate = null;
startBtn.disabled = true;
const dateSec = Date.now();

startBtn.addEventListener('click', pressStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,  
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    // console.log(selectedDates[0].getTime());  
    
    if (selectedDates[0].getTime() >= dateSec) {
      startBtn.disabled = false;
      pickDate = selectedDates[0].getTime();
      
      return;
    }
    window.alert('Please choose a date in the future');
  },
};

flatpickr('#datetime-picker', options);

function pressStart() {
  
  setInterval(() => {
    const timeNow = Date.now();
    const timeComponents = convertMs(pickDate - timeNow);
    daysEl.textContent = addLeadingZero(timeComponents.days);
    hoursEl.textContent = addLeadingZero(timeComponents.hours);
    minutesEl.textContent = addLeadingZero(timeComponents.minutes);
    secondsEl.textContent = addLeadingZero(timeComponents.seconds);
  }, 1000)
  
  
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}




