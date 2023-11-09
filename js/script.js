const container = document.querySelector(".container");
const loaderContainer = document.querySelector(".loader-container");
const tweetBtn = document.querySelector("#twitter");

// Show loading
function loading() {
  loaderContainer.style.display = "flex";
  container.style.display = "none";
}

// Hide loading
function complete() {
  loaderContainer.style.display = "none";
  container.style.display = "flex";
}

async function getQuotes() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/tariq-k-dev/quote-generator/main/js/quotes.json"
    );
    const quotes = await response.json();

    return quotes;
  } catch (err) {
    console.error(err);
  }
}

async function storeQuotes() {
  loading();

  const localQuotes = localStorage.getItem("quotes");

  if (localQuotes !== null && localQuotes !== "undefined") {
    getQuote();
  } else {
    const quotes = await getQuotes();
    localStorage.setItem("quotes", JSON.stringify(quotes));
    getQuote();
  }
}

function getQuote() {
  const storedQuotesStr = localStorage.getItem("quotes");

  if (storedQuotesStr !== null) {
    const storedQuotes = JSON.parse(storedQuotesStr);
    const index = Math.round(Math.random() * storedQuotes.length);
    const { author, text } = storedQuotes[index];
    const quoteElem = document.getElementById("quote");
    const authorElem = document.getElementById("author");

    localStorage.setItem(
      "quoteData",
      JSON.stringify({
        quote: text,
        author: author,
      })
    );
    quoteElem.innerText = text;
    authorElem.innerText = `-${author}`;

    complete();
  } else {
    console.log("Inside else block");
    storeQuotes();
  }
}

function tweetQuote(e) {
  e.preventDefault();

  const quoteData = JSON.parse(localStorage.getItem("quoteData"));
  const quote = encodeURIComponent(quoteData.quote);
  const author = encodeURIComponent(quoteData.author);
  const url = encodeURIComponent(window.location.href);
  const text = `"${quote}"  - ${author}   ${url}`;
  const tweetableQuote = `https://twitter.com/intent/tweet?text=${text}`;

  window.open(tweetableQuote, 'target="_blank"');
}

tweetBtn.addEventListener("click", tweetQuote);

storeQuotes();
