<img src="https://img.shields.io/badge/-%20Get%20A%20Quote-3d3d3d?logo=JavaScript" alt="Custom JS badge with Get A Quote logo" style="float: left;" />

# [Random Quote Generator](https://tariq-k-dev.github.io/quote-generator/)

The purpose of this project is to be a random quote generator using JavaScript.  It was built using the Fetch API to get a list of quotes, and either display a single quote formatted in a web page, or to the console. 

## How to View a Quote

This project uses a JSON file that consists of 8261 quote objects stored in an array.  Their are two ways to view a quote.  Either through the GitHub hosted page found at https://tariq-k-dev.github.io/quote-generator/, or running the following command with `quotes.js`: 

```bash
$ node quote.js
```

This `quote.js` file is also hosted in its' own Gist at https://gist.github.com/tariq-k-dev/7bc1b22d587fcd5d2bf62ba46b78c756, as well as this repository in the `js` folder.

NOTE: There may be a little bit of lag time because the quotes are being fetched from from a remote GitHub server, especially with console app.  A "Fetching quote..." line is printed to the console while waiting for the quotes to be fetched.  With the web browser a spinning loading icon is present till the quotes are returned.

## Features and Technology

The quotes are fetched both in the web and console app using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).  [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) is used to persist the quotes fetched and displayed in the browser.  On web app there is an option to Tweet a a quote which utilizes a Twitter `widgets.js` file.

## Credits

The quotes were obtained from https://jacintodesign.github.io/quotes-api/data/quotes.json, and added a file called `quotes.json` in the `js` folder to this repository.  I obtained the original Twitter `widgets.js` file from https://platform.twitter.com/widgets.js.

## License

MIT License.
Copyright (c) 2023 Tariq Khan

