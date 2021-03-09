<p align="center">
  <a href="https://imgur.com/Wr2BsNb"><img src="https://i.imgur.com/Wr2BsNbm.png" title="source: imgur.com" /></a>
</p>
<p align="center">
  <a href="https://travis-ci.org/srebughini/BEERQ"><img alt="Travis (.org)" src="https://img.shields.io/travis/srebughini/BEERQ"></a>
  <a href="https://www.npmjs.com/package/beerq"><img alt="npm" src="https://img.shields.io/npm/dt/beerq"></a>
  <a href="https://www.npmjs.com/package/beerq"><img alt="npm" src="https://img.shields.io/npm/v/beerq?color=blue"></a>
  <a href="https://github.com/srebughini/BEERQ/blob/main/LICENSE"><img alt="GitHub" src="https://img.shields.io/github/license/srebughini/BEERQ"></a>
  <a href="https://www.codefactor.io/repository/github/srebughini/beerq"><img src="https://www.codefactor.io/repository/github/srebughini/beerq/badge" alt="CodeFactor" /></a>
</p>

## 1. Installation
**BeerQ** is part of the [ASALI](https://srebughini.github.io/ASALI/) project and it is a **JavaScript** library to get **beer related quotes** in different languages. You can check some of them [here](https://srebughini.github.io/BEERQ/).  
Its [npm package](https://www.npmjs.com/package/beerq) can be installed as follow:

```bash
npm i beerq
```  
The main advanntage of using **BeerQ** is that all quotes are hardcoded in JS variables, allowing the inclusion of **BeerQ** in any web application.

## 2. Examples
The use of **BeerQ** is pretty straightforward, but here you can find an example that might help:  

```javascript
import { BeerQuote } from "beerq"

// Generate beer quotes object with the language of your website
let beerQuote = BeerQuote("eng");

// Extract list of authors
let authorList = beerQuote.getAuthorList());

// Extract a random quote
let randomQuote = beerQuote.getRandomQuote();

// Extract quotes of a specific author
let authorQuotes = beerQuote.getQuotesFromAuthor("Benjamin Franklin");

// Extract a random quote of a specific author
let randomAuthorQuote = beerQuote.getRandomQuoteFromAuthor("W. C. Fields");
```

## 3. Contacts
If you want to contribute, ask questions, report bugs or just *drink a beer* with us feel free to open an [issue](https://github.com/srebughini/BEERQ/issues).
