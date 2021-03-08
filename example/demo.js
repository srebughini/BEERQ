import BeerQuote from "../src/beerq.js"

let beerQuote = BeerQuote();

console.log(beerQuote.getQuoteFromIndex(1));
console.log(beerQuote.getQuoteFromAuthor("Horace"));
console.log(beerQuote.getRandomQuote());
