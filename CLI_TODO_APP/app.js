import readline from "readline";                       //readline is a module that helps to interact with CLI
const rl = readline.createInterface({
                                                      //here we perform Read and write: used to print in Common Language Interface
    input : process.stdin,
    output: process.stdout,
})

const Todos = [];                                    //user add the task here

const showMenu = ()=>
{
    console.log("\n 1: Add a Task");
    console.log("2: View Tasks ")
    console.log("3: Exit");                          //option that display on CLI

    // Now we need to create an environment such that user can select one option among all option 
    rl.question("Choose An Option: ", handleInput);
}

const handleInput = (selectoption)=>
{
    if(selectoption === "1")
    {
        //user want to add a task:for that we need to pass a promt:
        rl.question("Enter the Task:",  (task)=>
        {
            //store the task into a Todos array: 
            Todos.push(task);
            console.log("Task Added: ", task);
            showMenu();
        })  
    }
    else if(selectoption === "2" )
    {
        // here we need to show the task:
        console.log("\n Your Todo Lists:");
        
        //here we need to show the list of an arry one by one, show we need to use either foreach() or map():
        Todos.forEach((task, index)=>
        {
              console.log(`${index+1}. ${task}`)
        })
        showMenu();
    }
    else if(selectoption === "3")
    {
        console.log("EXIT FROM THE CLI TODO...");
        rl.close();                                       //? to close the program
    }

    else{
        console.log("Invalid Options, Please Try Again...");
        showMenu();
    }
}

showMenu();
