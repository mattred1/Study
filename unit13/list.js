window.setTimeout(function () {
    // put all of your JS code from the lecture here


var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while (input !== "quit") {                                              // as long as input doesn't equal "quit", continue running this loop
    //handle input
    if (input === "list") {
        console.log(todos);                                             // if input is equal to list, log all todos, because we'd want to list all todos in the array
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");        // if input is equal to new, add new todo to end of array (push)
        todos.push(newTodo);
    }

    //ask again for new input
    input = prompt("What would you like to do?");

}
console.log("Okay, you quit the app.")












}, 500);
