import { VectorUtils } from "./utils.js"
import { quotes } from "./quotes.js"


export function BeerQuote(language = "eng") {
    let _quoteDictList = quotes("eng");
    let _numberOfQuotes = _quoteDictList.length;
    let _authorList = _quoteDictList.map(quoteDict => quoteDict.author);
    let _quoteList = _quoteDictList.map(quoteDict => quoteDict.quote);
    let _vectorUtils = VectorUtils();

    function getAuthorList() {
        return _vectorUtils.getUnique(_authorList)
    }

    function getAllQuotes() {
        return _quoteDictList;
    }

    function getRandomQuotes(numberOfQuotes) {
        let quoteIndeces = _vectorUtils.getVectorofRandomIndices(0, _numberOfQuotes, numberOfQuotes, true)
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getQuotesFromIndices(quoteIndeces) {
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getQuotesFromAuthor(authorName) {
        let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName)
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getRandomQuote() {
        let quoteIndex = _vectorUtils.getRandomIndex(0, _numberOfQuotes);
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getQuoteFromIndex(quoteIndex) {
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getRandomQuoteFromAuthor(authorName) {
        let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName)
        let randomIndex = _vectorUtils.getRandomIndex(0, quoteIndeces.length);
        let quoteIndex = quoteIndeces[randomIndex]
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    return {
        getAuthorList,
        getAllQuotes,
        getRandomQuotes,
        getQuotesFromIndices,
        getQuotesFromAuthor,
        getRandomQuote,
        getQuoteFromIndex,
        getRandomQuoteFromAuthor
    }
}