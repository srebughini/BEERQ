import { VectorUtils } from "./utils.js"
import { languages, quotes } from "./quotes.js"


export function BeerQuote(language) {
    let _quoteDictList = quotes(language);
    let _languagesList = languages();
    let _numberOfQuotes = _quoteDictList.length;
    let _authorList = _quoteDictList.map(quoteDict => quoteDict.author);
    let _quoteList = _quoteDictList.map(quoteDict => quoteDict.quote);
    let _vectorUtils = VectorUtils();

    function getLanguagesList() {
        /**
         * Return the list of availabe languages
         */
        return _languagesList;
    }

    function getAuthorList() {
        /**
         * Return the list of authors
         */
        return _vectorUtils.getUnique(_authorList)
    }

    function getAllQuotes() {
        /**
         * Return all quotes
         */
        return _quoteDictList;
    }

    function getRandomQuotes(numberOfQuotes) {
        /**
         * Return a list of random quotes
         */
        let quoteIndeces = _vectorUtils.getVectorofRandomIndices(0, _numberOfQuotes, numberOfQuotes, true)
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getQuotesFromIndices(quoteIndeces) {
        /**
         * Return a list of quotes from list of indeces
         */
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getQuotesFromAuthor(authorName) {
        /**
         * Return the quotes of a specific author
         */
        let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName)
        return quoteIndeces.map(quoteIndex => _quoteDictList[quoteIndex]);
    }

    function getRandomQuote() {
        /**
         * Return a random quote
         */
        let quoteIndex = _vectorUtils.getRandomIndex(0, _numberOfQuotes);
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getQuoteFromIndex(quoteIndex) {
        /**
         * Return a quote from an index
         */
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    function getRandomQuoteFromAuthor(authorName) {
        /**
         * Return a random quote from a specific author
         */
        let quoteIndeces = _vectorUtils.getAllIndexOf(_authorList, authorName)
        let randomIndex = _vectorUtils.getRandomIndex(0, quoteIndeces.length);
        let quoteIndex = quoteIndeces[randomIndex]
        return { quote: _quoteList[quoteIndex], author: _authorList[quoteIndex] }
    }

    return {
        getLanguagesList,
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