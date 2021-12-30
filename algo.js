//////////////////////////////////////////////////
//  Code Wars: BREAK CAMEL CASING
//////////////////////////////////////////////////

function solution(str) {
    let output = "";
    console.log("str", str);
    for ( x in str ) {
        console.log(str[x]);
        if (str[x] == str[x].toUpperCase()) {
            console.log("found upper case");
        }
        
    }
    return output;
}

console.log("thisIsAString", solution("thisIsAString"));