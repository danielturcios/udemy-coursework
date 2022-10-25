let command = prompt("Welcome! Enter a command");
let todo_list = [];
command = command.toLocaleLowerCase();

while (command !== "quit") {
    if (command === "new") {
        let todo = prompt("Enter A New ToDo");
        todo_list.push(todo);
        console.log(`Added ${todo} to to-do list.`);
    }
    else if (command === "list") {
        console.log('************');
        for (let i = 0; i < todo_list.length; i++) {
            console.log(`${i} ${todo_list[i]}`);
        }
        console.log('************');
    }
    else if (command === "delete") {
        let index = prompt("Enter the index of the todo you wish to delete");
        index = parseInt(index);
        try {
            console.log(`Removing ${todo_list[index]} at index ${index} from To-Do list`)
            todo_list.splice(index, 1);
        } catch (error) {
            console.log("Error: invalid index")
        }
    } else {
        console.log(`Error: ${command} is an invalid command`);
    }
    command = prompt("Enter a command");
    command = command.toLocaleLowerCase();
}

console.log("Goodbye!");