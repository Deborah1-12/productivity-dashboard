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

//fetching quotes from external API
let dataArray = [];  // Initialize an empty array to hold quotes
const getQuotes = async () => {
    // Fetch quotes from external API
    const response = await fetch('https://dummyjson.com/quotes');
    if (!response.ok) throw new Error(`API error: ${response.status}`);  // Throw error if fetch fails
    const data = await response.json();  // Parse response JSON
    dataArray = data.quotes; 
    
}

getQuotes().then(() => {
    let index = 0;
    
    
        // If QuotesArray is empty, log error and return early
        if (dataArray.length === 0){
            console.error('Error: dataArray is empty');
            return;
        }

        // Get references to quote display elements
        const quoteDisplay = document.getElementById('quote-display');
        const quoteAuthor = document.getElementById('quote-author');

        // Function to update quote and author
        const updateQuote = () => {
            if (index >= dataArray.length) {
                index = 0;
            }
            const quotes = dataArray[index].quote;
            const author = dataArray[index].author;
            if (quoteDisplay && quoteAuthor) {
                quoteDisplay.textContent = `"${quotes}"`;
                quoteAuthor.textContent = `${author}`;
            }
        };

        // Initial display
        updateQuote();

        // Increment index and update quote every 5 seconds
        const interval = setInterval(() => {
            index++;
            updateQuote();
        }, 5000);
})