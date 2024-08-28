//node package manager
// npm init    ->   package.json will be created for installed packages as depenedcies
//npm install chalk       -> node_modules created for code for added dependecies , also package-lock created in which extra info about chalk module

// import chalk from 'chalk';
const validator = require('validator');

// console.log(chalk.blue.underline.inverse('Hello world!'));

const res = validator.isEmail("meet36@gmail.com");
console.log(res);