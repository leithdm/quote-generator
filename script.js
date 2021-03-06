const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');
const QUOTE_ARRAY_MAX = 1643;
const apiUrl = 'https://type.fit/api/quotes';

function showLoadingSpinner() {
    spinner.hidden = false; 
    quoteContainer.hidden = true; 
}

function getRandomQuote() {
    return Math.floor(Math.random() * (QUOTE_ARRAY_MAX + 1));
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
    try {
        const response = await fetch(apiUrl); 
        const data = await response.json(); 
        let randomQuote = getRandomQuote();
        //If author is null, add 'Unknown
        if (data[randomQuote].author === null) {
            authorText.innerText = 'Unknown'
        } else {
            authorText.innerText = data[randomQuote].author;
        }
        //Reduce font size for long quotes by assigning classList('long-quote)
        if (data[randomQuote].text.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data[randomQuote].text;
        removeLoadingSpinner(); 
    } catch (error) {
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
