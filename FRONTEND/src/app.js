const themeToggler = document.getElementById('theme-toggler');
const icon = document.querySelector('#theme-toggler i');

//theme toggle
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (icon.classList.contains('fa-moon')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

//timer function
const timeDisplay = document.getElementById('time-display');

const timeout = setInterval(() => {
   const now = new Date();
   const time = now.toTimeString().split(' ')[0];
   timeDisplay.textContent = time;
}, 100);

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

//date function
const dateDisplay = document.getElementById('date-display');
const today = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const getOrdinal = n =>
  n > 3 && n < 21 ? `${n}th` :
  [`st`,`nd`,`rd`][(n % 10) - 1] || `${n}th`;

const formatted = `${capitalize(days[today.getDay()].toLowerCase())} ${getOrdinal(today.getDate())} ${capitalize(months[today.getMonth()].toLowerCase())} ${today.getFullYear()}`;

dateDisplay.textContent = formatted;