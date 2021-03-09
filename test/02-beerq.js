import * as assert from 'assert'
import { BeerQuote } from "../src/beerq.js";

let beerq = BeerQuote("eng")

describe('BeerQuote.getQuoteFromIndex()', function () {
  let expected = {
    quote: "Now is the time to drink!",
    author: "Horace"
  };
  let index = 0;
  it('should return ' + expected + ' when the index is ' + index, function () {
    assert.deepEqual(beerq.getQuoteFromIndex(index), expected);
  });
});

describe('BeerQuote.getQuotesFromAuthor()', function () {
  let expected = [
    {
      quote: 'Beer is the proof that god loves us and wants us to be happy.',
      author: 'Benjamin Franklin'
    },
    {
      quote: 'In wine there is wisdom, in beer there is freedom, in water there is bacteria.',
      author: 'Benjamin Franklin'
    }
  ]
  it('should return ' + expected + ' when the author is Benjamin Franklin', function () {
    assert.deepEqual(beerq.getQuotesFromAuthor("Benjamin Franklin"), expected);
  });
});

describe('BeerQuote.getQuotesFromIndices()', function () {
  let expected = [
    {
      quote: "But I'm not so think as you drunk I am.",
      author: 'Sir John Collings Squire'
    },
    { quote: 'Fermentation equals civilisation.', author: 'John Ciardi' }
  ]
  it('should return ' + expected + ' when for indeces: 32 and 10', function () {
    assert.deepEqual(beerq.getQuotesFromIndices([32,10]), expected);
  });
});