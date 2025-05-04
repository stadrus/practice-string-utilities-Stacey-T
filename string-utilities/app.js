const stringUtils = require('./stringUtils');

let str1 = "red, green, yellow";
console.log(stringUtils.capitalize(str1));
console.log(stringUtils.reverseStr(str1));
console.log(stringUtils.contains(str1, "red"));
console.log(stringUtils.contains(str1, "blue"));


let str2 = "Have a great day!";
console.log(stringUtils.capitalize(str2));
console.log(stringUtils.reverseStr(str2));
console.log(stringUtils.contains(str2, "great"));
console.log(stringUtils.contains(str2, "blue"));
