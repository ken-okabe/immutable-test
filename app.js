/*
var _ = require('lodash');
var __ = require('lazy.js');

var fibF = _.memoize(function(n) {
  return n <= 1 ? 1 : fibF(n - 2) + fibF(n - 1); //as the math definition of fibonacci
});

var __fib = __.generate(fibF); //infinite fibonacci sequence

var __fib100 = __fib.take(100); //first 100 sequence (still no calculation)

console.log(__fib100.toArray()); //calculate and output
*/



var _ = require('lodash');
var __ = require('immutable');

var __natural = __.Range(); //infinite natural numbers sequence

var __narural10 = __natural.take(10);

console.log(__narural10.toArray());


var fibF = _.memoize(function(n) {
  return n <= 1 ? 1 : fibF(n - 2) + fibF(n - 1); //as the math definition of fibonacci
});

var __fib = __natural.map(fibF);

var __fib100 = __fib.take(100); //the first 100 sequence (still no calculation)
console.log(__fib100.toArray()); //calculate and output
