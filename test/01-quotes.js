import * as assert from 'assert'
import { quotes } from "../src/quotes.js";

describe('quotes()', function () {
  let expected = { quote: "Now is the time to drink!", author: "Horace" };
  let language = "eng";
  it('should return ' + expected + ' when the language is ' + language, function () {
    assert.deepEqual(quotes(language)[0], expected);
  });
});