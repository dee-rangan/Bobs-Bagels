const { assertEquals, printResult } = require('../test-framework.js');

const addItem = require('../src/basket');

/*
// setup
  let basket = new Basket();
  let item = new Item()
console.log('Test for adding one item');
  // execute
  let result = basket.add(item);

  // verify
  test.assertEquals(result.length, 3);
;
*/


const Basket = require('../src/basket.js');
const compare = require('../test-framework.js');

//TEST 1 check if can add
//Setup

let basket = new Basket();
let bagel = new Bagel();

//Execute
basket.add("bagel");

//Verify
return test.assertEquals(result.length, 1)

/*
console.log(basket.basket.includes("bagel"));

console.log(compare(basket.basket.length, 4));
*/
//TEST 2

//let basket = new Basket();

basket.add("bagel");
basket.add("bagel");


console.log(basket.basket.includes("bagel"));

console.log(compare(basket.basket.length, 2));



//TEST 3 check if can add many

//basket = new Basket();

basket.add("bagel");
basket.add("bagel");
basket.add("bagel");

console.log(compare(basket.basket.length, 3));
console.log(basket.basket.includes("bagel"));
//console.log(basket.basket.includes("bagel3"));


let expectedOutput, actualOutput, result;