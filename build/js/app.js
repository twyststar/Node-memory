(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var cardArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,0,0]
function Memory() {
this.cards = cardArr.sort(function(a, b){return 0.5 - Math.random()});
}





exports.journalMemory = Memory;

},{}],2:[function(require,module,exports){
var Memory = require('./../js/memory.js').memoryModule;

// $(document).ready(function() {
//   $('#startGame').click(function(event){
//     game = new Memory()
//     game.cards.forEach(card){}
//
//   });
// });

},{"./../js/memory.js":1}]},{},[2]);
