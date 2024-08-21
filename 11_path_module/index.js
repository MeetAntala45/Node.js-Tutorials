const path = require("path");

// show path of particular file
console.log(path.dirname('C:/Users/MEET/Desktop/NodeJS/11_path_module/index.js'));

// show extension name
console.log(path.extname('C:/Users/MEET/Desktop/NodeJS/11_path_module/index.js'));

// shows file name
console.log(path.basename('C:/Users/MEET/Desktop/NodeJS/11_path_module/index.js'));

// shows root,dir,base,ext,name as object
console.log(path.parse('C:/Users/MEET/Desktop/NodeJS/11_path_module/index.js'));

// access particular object of parse
const mypath = path.parse('C:/Users/MEET/Desktop/NodeJS/11_path_module/index.js');
console.log(mypath.name);