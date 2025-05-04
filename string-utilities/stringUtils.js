/*Part 2: Practicing String Utilities 
1. Create the stringUtils.js Module: 
    ○ Define and export the following functions: 
■ capitalize(str): Converts the first letter of a string to 
uppercase. 
■ reverse(str): Reverses the characters in a string. 
■ contains(str, substr): Checks if a substring exists within a 
string and returns true or false. */

function capitalize(str){//converts the first letter of a string to uppercase
    return str.charAt(0).toUpperCase() + str.slice(1);//.charAt(0): Extracts the first character of the string.
    //toUpperCase(): Converts the first character to uppercase.
    //slice(1): Extracts the rest of the string starting from the second character.
    
}
function reverseStr(str){
    return str.split("").reverse().join("");// reverse and joins the string
}
function contains(str, substr){
    if (str.includes(substr)){
        console.log(`Substring: ${substr} does exists.`);
        return true; 
    }else{
        console.log(`Substring: ${substr} does exists.`);
        return false;
    }
}

    module.exports = {capitalize,reverseStr,contains};