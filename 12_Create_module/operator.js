const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

const mul= (a,b) => {
    return a*b;
}
const name= 'meet';

// for exporting
//module.exports = add;  // only add will be exported

// if we want to export both add and sub then
// module.exports.add = add;
// module.exports.sub = sub;

// if we want all thing then
module.exports = {add,sub,mul,name};