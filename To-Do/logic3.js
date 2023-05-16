var inputbox = document.getElementById("inputUser");
var listContainer = document.getElementById("list");

function addTodo(){
    console.log("Working");
    if(inputbox.value != "")
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value; 
        listContainer.appendChild(li);

    }
    else{
        alert("Please enter a task");
    }
}