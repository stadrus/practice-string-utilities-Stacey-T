/*Part 2: Practicing String Utilities 
1. Create the stringUtils.js Module: 
    ○ Define and export the following functions: 
■ capitalize(str): Converts the first letter of a string to 
uppercase. 
■ reverse(str): Reverses the characters in a string. 
■ contains(str, substr): Checks if a substring exists within a 
string and returns true or false. */
function capitalize(str){
    return str.toUpperCase();//converts the first letter of a string to uppercase.
}
function reverseStr(str){
    return str.split("").reverse().join("");// reverse and joins the string
}
function contains(str,substr){
    if (str.length = substr){
        return true; 
    } else{
        return false;
    }
        

}

    module.exports = {capitalize,reverseStr,contains};