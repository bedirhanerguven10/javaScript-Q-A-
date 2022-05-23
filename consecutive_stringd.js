/* You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy". */

// Solution-1

// function longestConsec(strarr, k) {
//     let max = "";
//     if(strarr.length == 0 || k > strarr.length || k <= 0){
//       return ""
//     }else {
//         for(let i = 0; i < strarr.length; i++){
//         if(strarr.slice(i,i+k).join("").length > max.length){
//             max = strarr.slice(i,i+k).join("")
//       }       
//   } return max
//   }
//   }

// Solution-2

// strarr = ["tree", "foling", "trashy", "blue", "abcdefdfg", "uvwxyz"], k = 2
// let list = [];

// for(let i = 0; i < strarr.length - 1; i++){
//     list.push(strarr[i].concat(strarr[i+1])) 

// }
// console.log(list.sort((a,b) => b.length - a.length)[0]);
