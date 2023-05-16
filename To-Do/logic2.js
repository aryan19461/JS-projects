// creating empty to do list array
var todos = [];

// function to add to do list
function addTodo() {
  // 2.1. Get the user input from the text input field   
    var todoInput = document.getElementById("inputUser");
    var todoText = todoInput.value;
 // 2.2. Create a new todo object with the input text and default status of "incomplete"
  
    var todo = {
        text : todoText,
        completed : false
    };
  // 2.3. Add the new todo object to the todos array

    todos.push(todo);
     // 2.4. Clear the input field

    todoInput.value = "";

     // 2.5. Call the displayTodos() function to update the todo list on the screen

    displayTodos();
}

function displayTodos() {
  // 3.1. Loop through the todos array
// 3.1. Get the element where the todos will be displayed
 
  var todoList = document.getElementById("todoList");
 
  // 3.2. Clear the current contents of the todoList element
  todoList.innerHTML = "";

   // 3.3. Loop through the todos array
  for (var i = 0; i < todos.length ; i++) 
  {
    // 3.4. Create a new list item element for each todo
    var listItem = document.createElement("li");
   
    // 3.5. Set the text content of the list item to the todo text
    listItem.textContent = todos[i].text;
    
    // 3.6. Add the list item to the todoList element
    todoList.appendChild(listItem);

  }
}

// 4. Event listener for the "Add Todo" button click
var addBtn = document.getElementById("enter");
addBtn.addEventListener("click", addTodo);



/*
Explanation:

The code starts by defining an empty array todos to store the list of todos.

The addTodo function is called when the user clicks the "Add Todo" button. It retrieves the user input from the text input field, creates a new todo object with the input text and default status of "incomplete", adds the new todo to the todos array, clears the input field, and then calls the displayTodos function to update the todo list on the screen.

The displayTodos function is responsible for rendering the list of todos on the screen. It retrieves the element where the todos will be displayed, clears its current contents, and then loops through the todos array. For each todo, it creates a new list item element, sets the text content of the list item to the todo text, and appends the list item to the todo list element.

Lastly, an event listener is added to the "Add Todo" button. When the button is clicked, the addTodo function is called.

This code provides a basic implementation of a todo list, allowing the user to add todos and displaying them on the screen. However, it doesn't include features like marking todos as complete or deleting todos, which could be added as extensions to this code.





*/


