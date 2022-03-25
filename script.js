async function getQuotes() {
  try {
    const response = await fetch('https://type.fit/api/quotes')
    quotes = await response.json()
    return quotes
  } catch (err) {
    console.error(err)
  }
}

async function storeQuotes() {
  const quotes = await getQuotes()
  localStorage.setItem('quotes', JSON.stringify(quotes))
  getQuote()
}

function getQuote() {
  const storedQuotesStr = localStorage.getItem('quotes')

  if (storedQuotesStr) {
    const storedQuotes = JSON.parse(storedQuotesStr)
    const index = Math.round(Math.random() * storedQuotes.length)
    const { text, author } = storedQuotes[index]
    const quoteElem = document.getElementById('quote')
    const authorElem = document.getElementById('author')
    // Replace null author value with 'Unknown'
    const authorFixed = author ? author : 'Unknown'

    localStorage.setItem(
      'quoteData',
      JSON.stringify({
        quote: text,
        author: authorFixed,
      })
    )
    quoteElem.innerText = text
    authorElem.innerText = `- ${authorFixed}`
  }
}

function tweetQuote(e) {
  e.preventDefault()

  const quoteData = JSON.parse(localStorage.getItem('quoteData'))
  const quote = encodeURIComponent(quoteData.quote)
  const author = encodeURIComponent(quoteData.author)
  const url = encodeURIComponent(window.location.href)
  const text = `${quote}  ${author}  ${url}`
  const tweetableQuote = `https://twitter.com/intent/tweet?text=${text}`

  window.location.href = tweetableQuote
}

const tweetBtn = document.querySelector('#twitter')
tweetBtn.addEventListener('click', tweetQuote)

storeQuotes()
