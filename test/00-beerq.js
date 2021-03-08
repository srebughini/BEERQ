import * as assert from 'assert'
import BeerQuote from "../src/beerq.js";

let beerq = BeerQuote()

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