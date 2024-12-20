#!/usr/bin/env node

// This is used as an example in the README for:
//    Other option types, negatable boolean
//    You can specify a boolean option long name with a leading `no-` to make it true by default and able to be negated.

const commander = require('commander');
const program = new commander.Command();

program
  .option('--no-sauce', 'Remove sauce')
  .option('--cheese <flavour>', 'cheese flavour', 'mozzarella')
  .option('--no-cheese', 'plain with no cheese');
  //.option('--sauce [type]', 'cheese type');
program.parse();

const options = program.opts();
const sauceStr = options.sauce ? 'sauce' : 'no sauce';
const cheeseStr =
  options.cheese === false ? 'no cheese' : `${options.cheese} cheese`;
console.log(`You ordered a pizza with ${sauceStr} and ${cheeseStr}`);

// Try the following:
// //    node options-negatable.js
// You ordered a pizza with sauce and mozzarella cheese

// //    node options-negatable.js --sauce
// You ordered a pizza with sauce and mozzarella cheese

// //    node options-negatable.js --cheese=blue
// You ordered a pizza with sauce and blue cheese

// //    node options-negatable.js --no-sauce --no-cheese
// You ordered a pizza with no sauce and no cheese
