#!/usr/bin/env node

// This is used as an example in the README for:
//    Common option types, boolean and value

const commander = require('commander');
const program = new commander.Command();

// const { Command } = require('commander');
// const program = new Command();
// или 
// import { Command } from 'commander';
// const program = new Command();
// класс Command, который нужно самостоятельно инициализировать для создания новой инстанции программы. 

// import { program } from 'commander';
// готовая инстанция объекта program, которая уже создана и настроена библиотекой commander

// обьект program из модуля commander
// обьект представляет основную часть приложения командной строки
// обьект предоставляет методы для настройки и обработки аргументов 
// командной строки (добавление опций, команд, действий)


program
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza');
  // первый аргумент функции option('', '') задает формат опции, второй дает словесное описание. 
  // <> - обязательный параметр
  // [] - необязательный параметр 

program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options); // { debug: true }
console.log('pizza details:');
if (options.small) console.log('- small pizza size');
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

//    node options-common.js -p
// error: option '-p, --pizza-type <type>' argument missing

//  node options-common.js -d -s
// { debug: true, small: true }
// pizza details:
// - small pizza size

//    node options-common.js -d -s -p vegetarian
// { debug: true, small: true, pizzaType: 'vegeterian' }
// pizza details:
// - small pizza size
// - vegeterian

//    node options-common.js --pizza-type=cheese
// pizza details:
// - cheese
