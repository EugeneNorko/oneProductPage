const refs = {
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
const getSavedTime = sessionStorage.getItem('discountTime');
const duration = getSavedTime ? getSavedTime : 180 * 60 * 1000;

const startTime = Date.now();

function updateTimer() {
  const currentTime = Date.now();
  const remainingTime = duration - (currentTime - startTime);
  const hours = Math.floor(remainingTime / 3600000);
  const minutes = Math.floor((remainingTime % 3600000) / 60000);
  const seconds = Math.floor((remainingTime % 60000) / 1000);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
  setLocalStorage(remainingTime);
}

setInterval(updateTimer, 1000);

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function setLocalStorage(time) {
  sessionStorage.setItem('discountTime', JSON.stringify(time));
}
