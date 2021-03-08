import * as assert from 'assert'
import { VectorUtils } from "../src/utils.js";

let vectorutils = VectorUtils()

describe('VectorUtils.getUnique()', function () {
  let expected = [1,2,3];
  let arg = [1,1,2,3,3,2];
  it('should return ' + expected + ' when the arg is ' + arg, function () {
    assert.deepEqual(vectorutils.getUnique(arg), expected);
  });
});

describe('VectorUtils.getAllIndexOf()', function () {
  let expected = [2,5];
  let arg_array = [1,1,2,3,3,2];
  let arg_value = 2;
  it('should return ' + expected + ' when we look for ' + arg_value + ' in ' + arg_array, function () {
    assert.deepEqual(vectorutils.getAllIndexOf(arg_array, arg_value), expected);
  });
});