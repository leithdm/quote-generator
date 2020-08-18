const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')


//asynchronous fetch function
//Get Quote from API
async function getQuote() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'; 
    try {
        const response = await fetch(proxyUrl + apiUrl); 
        const data = await response.json(); 
        // console.log(data);
        quoteText.innerText = data.quoteText; 
        authorText.innerText = data.quoteAuthor; 
    } catch (error) {
        //getQuote(); 
        console.log("whoops, no quote", error);
    }
}


//On Load
getQuote(); 