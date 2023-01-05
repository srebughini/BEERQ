import * as assert from 'assert'
import { quotes, languages } from "../src/quotes.js";

describe('quotes()', function () {
  let expected = { quote: "Now is the time to drink!", author: "Horace" };
  let language = "eng";
  it('should return ' + expected + ' when the language is ' + language, function () {
    assert.deepEqual(quotes(language)[0], expected);
  });
});

describe('languages()', function () {
  let expected = ["eng", "ita"];
  it('should return ' + expected, function () {
    assert.deepEqual(languages(), expected);
  });
});