# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cheryet/lotide`

**Require it:**

`const _ = require('@cheryet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `head()` : Returns the first element of an array.
* `tail()` : Returns everything but the first element of an array.
* `middle()` : Returns the middle element(s) of an array.
* `assertArraysEqual()` : Strictly compares two arrays and logs result.
* `assertEqual()` : Strictly compares two values and logs result.
* `assertObjectsEqual()` : Strictly compares two objects and logs result.
* `countLetters()` : Counts the letters in a string and returns an object containing what letters appeared x amount of times.
* `countOnly()` : Counts a string and returns a count of a specific subset of that string. 
* `eqArrays()` : Strictly compares two arrays and returns true or false based on results.
* `eqObjects()` : Compares two objects and returns true or false based on results.
* `findkey()` : Takes in an object and a callback and returns the first key upon which the callback returns truthy. If no key is found, returns undefined.
* `findKeyByValue()` : Takes in an object and value and returns the first key which contains that value. If no key is found return undefined.
* `flatten()` : Flattens a 2D array.
* `letterPositions()` :Takes in a tring and returns and object with the letter and their respective indices.
* `map()` : Referance [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* `takeUntil()` : Takes in an array and a callback. Will return a slice of the array untill the callback provided returns a truthy value.
* `without()` : Takes in a source array and an items to remove array. A new array will be returned with only those elements from the source array that were not present in the items to remove array.