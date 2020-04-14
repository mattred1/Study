// Print all numbers between - 10 and 19
/*
for(var i = -10; i < 20; i++) {
    console.log(i);
}
*/

//--------------------------------------------------------//
//--------------------------------------------------------//


// Print all even numbers between 10 and 40
// method #1
// for (var i = 10; i <= 40; i += 2) {
//     console.log(i);
// }
// end method #1
 
// method #2:  actually only pulls even numbers wrapped in the if statement
// for (var i = 10; i <= 40; i += 1) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
// end method #2

//--------------------------------------------------------//
//--------------------------------------------------------//


// Print all odd numbers between 300 and 333

// for (var i = 300; i <= 333; i ++) {
//     if (i % 2 === 1) {           //could also do i % 2 !== 0 
//         console.log(i);
//     }
// }


//--------------------------------------------------------//
//--------------------------------------------------------//


// Print all numbers divisible by 5 AND 3 between 5 and 50

for(var i = 0; i < 51; i ++ ) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i)
    }
}



// var count = 5;

// while (count < 51) {
//     if (count % 5 === 0 && count % 3 === 0) {                      // Divisible by both 5 AND 3
//         console.log(count)
//     }
//     count++;
// }



