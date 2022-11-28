/**
 *
 * In this file i will load reandom Quote with API
 */

const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((quote) => displayQuote(quote));
};

const displayQuote = (quote) => {
  const quoteContainer = document.getElementById("quote");
  quoteContainer.innerText = quote.quote;
  //   console.log(quoteContainer.innerText.length);
};
