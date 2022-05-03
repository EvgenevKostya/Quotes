const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn= document.getElementById('new-quote');
const loader =document.getElementById('loader');

//Show Loading
function showLoadingSpinner () {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function removeLoadingSpinner() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}



//show new quote
function newQuote() {
    showLoadingSpinner();
// Pick a random quote from quotes.js array
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)]
// Check if Auther field is blank  and replace it with 'Unknown'
    if (!quote.author) {
    authorText.textContent = "Unknown";
    } else {
    authorText.textContent = quote.author;
    }
// check quote length to determine styling
    if (quote.text.length > 50) {
    quoteText.classList.add('long-quote')
    } else {
    quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
    removeLoadingSpinner();
}

//Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// getQuotes();
newQuote();
