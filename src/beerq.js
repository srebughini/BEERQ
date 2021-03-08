let quoteList = [
    {
        quote: "Now is the time to drink!",
        author: "Horace"
    },
    {
        quote: "Beer is the proof that god loves us and wants us to be happy.",
        author: "Benjamin Franklin"
    }
]

function randomIndex(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function BeerQuote() {
    let _quoteDictList = quoteList;
    let _numberOfQuotes = _quoteDictList.length;
    let _authorList = _quoteDictList.map(quoteDict => quoteDict.author);
    let _quoteList = _quoteDictList.map(quoteDict => quoteDict.quote);


    function getAllQuotes() {
        return _quoteDictList;
    }

    function getQuoteFromIndex(quoteIndex) {
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getQuoteFromAuthor(authorName) {
        let quoteIndex = _authorList.indexOf(authorName)
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getRandomQuote() {
        let quoteIndex = randomIndex(0, _numberOfQuotes);
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    return { getAllQuotes, getQuoteFromIndex, getQuoteFromAuthor, getRandomQuote }
}