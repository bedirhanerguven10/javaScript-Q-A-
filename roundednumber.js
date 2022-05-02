// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

let notes = [70, 60, 40, 65, 90, 100];


// function hesapla() {
//     return notes.reduce(Math.sum)
// }
// console.log(hesapla());

// let sum = notes.reduce(function(a,b){
//     return a+b;
// }  );
// console.log(sum);

let avg = sum/notes.length

console.log(avg.toFixed(2));
function sum(array){
    let sam = arr.reduce(function(a,b) {return a+b} )
}
function avg(arr) {
    let sam = arr.reduce(function(a,b));
    return sam
}

console.log(avg(notes));

