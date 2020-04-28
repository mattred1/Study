// #1 -- Write a function that takes a single numeric argument and returns true if the number is even or false if the number is odd

// v1
function isEven(x) {
//return true if even
    if (x % 2 === 0) {
        return true;
    } 
//return false if odd
        else {
        return false;
    }
}



// v2 - refactored
function isEven(x) {
    return x % 2 === 0;
}
// This is already a boolean statement, so it just returns true or false






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// #2 -- Write function that takes single numeric argument and returns the factorial of that number

// v1 //
// ------- factorial (4) = 1 x 2 x 3 x 4. This solution is a little better than going down incrementally because it's shorter
function factorial(x) {
    //define a result variable
    var result = 1;

    //calculate factorial and store value in result
    // use a loop (for or while would work) to to "start at 1 and multiply the number each time until you get to x." Start at 1 and work your way up. Start at 2 because 1x1=1
    for(var i = 2; i <= x; i++) {
        result = result * i;            //shortcut for this would be "result *= i;"
    }

    //return the result variable
    return result;
}



// v2 //
// ------- factorial (4) = 4 x 3 x 2 x 1
function factorial(x) {
    // if x is 0, return 1. x=0 would normally return 0
    if(x === 0) {
        return 1;
    }
  var result = x;
  for (var i = x-1; i >= 1; i--) {
    result *= i; 
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// # 3 -- Write a function that takes a single kebab-cased string argument and returns the snake_cased version

function kebabToString(str) {
    // step1: replace all '-' with "_" 's
    var newStr = str.replace(/-/g , "_");              //this /-/ g is called a regular expression. Whatever we put inside the // is the patter that it will look for to replace. 
    // step2: return str
    return newStr
    // replace() Just returns copy of replaced data. We want to save that as a variable.
}
