/*
Q) Write simple .camelCase method 
(camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. 
All words must have their first letter capitalized without spaces.

*/

String.prototype.camelCase=function(){
  //your code here
  let strList = this.split(" ");
  let result = "";
  
  for (let i = 0; i < strList.length; i++) {
    let row = strList[i].split("");
    if (row.length === 0) row[0] = "";
    row[0] = row[0].toUpperCase();
    result += row.join("");
  }
  
  return result;
}