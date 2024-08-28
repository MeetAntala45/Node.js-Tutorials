// const add = require('./operator');
// console.log(add(1,45));


// const op = require('./operator');
// console.log(op);     // this will give whole object
// console.log(op.add(1,45));
// console.log(op.sub(45,1));


const { add,sub ,mul,name}= require("./operator"); 
console.log(add(1,45));
console.log(sub(45,1));
console.log(mul(45,1));
console.log(name);