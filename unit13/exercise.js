
console.log("Connected!");



/*
    function printReverse(arr) {
        for(var i = arr.length - 1; i >= 0; i--) {                                                                //arr.length will get the length of the array, and we add "-1" because the index is always one less than length
            console.log(arr[i]);                                                                                          //print out array of i(starting with the last element, per i=arr.length)
        }
    }

    printReverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);                                                                //runs the array as an argument. open the console to look.
*/



/*
    function isUniform(arr) {
        var first = arr[0];
        for (var i = 1; i < arr.length; i++) {                                                                // we can use i=1 instead of i=0 because we don't need to compare i to the first element, we can skip to comparing it to the second element. Because of i++, it'll go through each element in the array and compare it to the first element.
            if (arr[i] !== first) {
                return false;
            }
        }
        return true;
    }
*/



function sumArray(arr) {
    var total = 0;                                                                                         // need to make a variable to hold the total, then we need to loop through the whole array, in this case using forEach
    arr.forEach(function(element) {
        total += element;                                                                            // adds total to each element, and, because it's forEach, it does it for each element
    });
    return total;
}

































