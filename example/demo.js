import { BeerQuote } from "../src/beerq.js"

let beerQuote = BeerQuote("eng");

console.log(beerQuote.getAuthorList());
console.log(beerQuote.getQuoteFromIndex(1));
console.log(beerQuote.getQuotesFromIndices([32,10]));
console.log(beerQuote.getQuotesFromAuthor("Benjamin Franklin"));
console.log(beerQuote.getRandomQuote());
console.log(beerQuote.getRandomQuoteFromAuthor("W. C. Fields"));
console.log(beerQuote.getRandomQuotes(10))