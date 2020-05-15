window.setTimeout(function () {
    // put all of your JS code from the lecture here


var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while (input !== "quit") {                                              // as long as input doesn't equal "quit", continue running this loop
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        var newTodo = prompt("Enter new todo");        // if input is equal to new, add new todo to end of array (push)
        todos.push(newTodo);
        console.log("Added Todo!");
    } else if (input === "delete") {
        // ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        
        // delete that todo
        todos.splice(index,1);                                                     //remove index that user provides (index is what i chose to call it for ease). after comma is number of elements to delete
        console.log("Deleted Todo!");
    }

    //ask again for new input
    input = prompt("What would you like to do?");

}
console.log("Okay, you quit the app.")





// Functions
function listTodos() {
    console.log("**********")                                                   // Simple - adds *'s around our list. Since it's outside of the forEach loop, it doesn't repeat or anything.
    todos.forEach(function (todo, index) {                          // use forEach loop to log each todo (function name randomly chosen - it's just applicable here). "index" is the 2nd argument a forEach loop will take. I chose to stick to that name (you can change it to whatever you want - doesn't have to be index)
        console.log(index + ": " + todo);                                          // if given the command "list," console.log each todo. forEach will log each todo on a separate line. Will print index + ": " + name of todo
    });
    console.log("**********")
}







}, 500);
