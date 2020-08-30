const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    spinner.hidden = false; 
    quoteContainer.hidden = true; 
}

function removeLoadingSpinner() {
    if (!spinner.hidden) {
        quoteContainer.hidden = false; 
        spinner.hidden = true;
    }
}

// Asynchronous Fetch Function
async function getQuote() {
    showLoadingSpinner(); 
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'; 
    try {
        //Will make API call from the headers of a proxy call to circumvent CORS error
        const response = await fetch(proxyUrl + apiUrl); 
        const data = await response.json(); 
        //If author is blank, add 'Unknown
        if (data.quoteAuthor === '') {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data.quoteAuthor;
        }
        //Reduce font size for long quotes by assigning classList('long-quote)
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        removeLoadingSpinner(); 
    } catch (error) {
        //frequently a formatting error. One solution is to call getQuote again until we get a suitable quote. This is an issue related to the API.
        console.log('Error', error);
    }
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}


// Event Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote(); 