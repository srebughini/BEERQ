import { BeerQuote } from "./../src/beerq.js"

window.getQuote = function getQuote() {
  let beerquotes = BeerQuote();
  let randomQuote = beerquotes.getRandomQuote();
  document.getElementById("quote").innerHTML = "<i>" + randomQuote.quote + "</i>";
  document.getElementById("author").innerHTML = randomQuote.author;
}