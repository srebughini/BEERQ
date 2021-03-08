import { BeerQuotes } from "beerq"

let beerquotes = BeerQuotes("eng");

function setRandomQuote(quoteId, authorId)
{
    let randomQuote = beerquotes.getRandomQuote();
    document.getElementById(quoteId).innerHTML = randomQuote.quote;
    document.getElementById(authorId).innerHTML = randomQuote.author;
}