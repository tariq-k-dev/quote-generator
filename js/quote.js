async function getQuotes() {
  try {
    console.log("\n  Fetching a quote...");

    const response = await fetch(
      "https://raw.githubusercontent.com/tariq-k-dev/quote-generator/main/js/quotes.json"
    );
    const quotes = await response.json();

    return quotes;
  } catch (err) {
    console.error(err);
  }
}

function formattedText(text) {
  let formattedStr = "";
  const words = text.split(" ");

  words.forEach((word, index) => {
    if (index === words.length - 1) {
      formattedStr += word;
    } else if ((index + 1) % 10 === 0) {
      formattedStr += word + "\n  ";
    } else {
      formattedStr += word + " ";
    }
  });

  return formattedStr;
}

async function getQuote() {
  const quotes = await getQuotes();
  const index = Math.round(Math.random() * quotes.length);
  const { author, text } = quotes[index];

  console.clear();
  console.log(`\n  "${formattedText(text)}"\n\n  - ${author}\n`);
}

getQuote();
