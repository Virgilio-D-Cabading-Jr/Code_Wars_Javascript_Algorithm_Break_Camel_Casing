//////////////////////////////////////////////////
//  Code Wars: BREAK CAMEL CASING
//////////////////////////////////////////////////

function solution(str) {
    let output = "";
    for ( x in str ) {
        if (str[x] == str[x].toUpperCase()) {
            output += " ";
        }
        output += str[x];
        
    }
    return output;
}

console.log("thisIsAString", solution("thisIsAString"));
console.log("camelCasing", solution("camelCasing"));
console.log("identifier", solution("identifier"));
console.log("", solution(""));