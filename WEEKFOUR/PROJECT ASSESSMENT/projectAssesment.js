// Array to store all our tasks
// Each task will be an object with text, completed status, and id
let tasks = [];

// This function runs when the page loads
// We'll use it to load tasks from local storage
window.onload = function() {
    loadTasks();
    // Only add sample tasks if the task list is empty
    if (tasks.length === 0) {
        addTask('Buy groceries to restock the house');
        addTask('Finish class project');
        addTask('Call a friend');
        addTask('Edit my work video');
        addTask('Read a novel');
    }
        displayTasks();
    };

// Function to add a new task
function addTask(taskText) {
    let textToAdd;
    
    if (taskText) {
        textToAdd = taskText.trim();
    } else {
        const taskInput = document.getElementById('taskInput');
        textToAdd = taskInput.value.trim();
        taskInput.value = ''; // Clear the input field
    }
    
    // Check if the input is not empty
    if (textToAdd !== '') {
        // Create a new task object
        const newTask = {
            id: Date.now(), // Unique ID
            text: textToAdd, // The task description
            completed: false // Task is not completed by default
        };
        
        // Add the new task to our tasks array
        tasks.push(newTask);
        
        // Save tasks to local storage
        saveTasks();
        
        // Update the display
        displayTasks();
    } else {
        // Alert the user if they tried to add an empty task
        alert('Please enter a task!');
    }
}

// Function to display all tasks
function displayTasks() {
    // Get the container where tasks will be displayed
    const taskList = document.getElementById('taskList');
    
    // Clear the container
    taskList.innerHTML = '';
    
    // Loop through each task in the tasks array
    tasks.forEach(task => {
        // Create a div for the task item
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        
        // Create a checkbox for marking task as complete
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed; // Set checkbox state based on task status
        // Add event listener to handle checkbox changes
        checkbox.onchange = function() {
            toggleTaskComplete(task.id);
        };
        
        // Create a span for the task text
        const taskText = document.createElement('span');
        taskText.className = 'task-text';
        // Add 'completed' class if task is completed
        if (task.completed) {
            taskText.classList.add('completed');
        }
        taskText.textContent = task.text;
        
        // Create a div for action buttons
        const actions = document.createElement('div');
        actions.className = 'task-actions';
        
        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = function() {
            editTask(task.id);
        };
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            deleteTask(task.id);
        };
        
        // Add buttons to actions div
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        
        // Add all elements to the task item
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(actions);
        
        // Add the task item to the task list
        taskList.appendChild(taskItem);
    });
}

// Function to toggle task completion status
function toggleTaskComplete(taskId) {
    // Find the task with the matching id
    const task = tasks.find(t => t.id === taskId);
    
    // Toggle the completed status
    if (task) {
        task.completed = !task.completed;
        
        // Save to local storage
        saveTasks();
        
        // Update the display
        displayTasks();
    }
}

// Function to edit a task
function editTask(taskId) {
    // Find the task with the matching id
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
        // Ask user for new task text
        const newText = prompt('Edit task:', task.text);
        
        // If user entered something (not null and not empty)
        if (newText !== null && newText.trim() !== '') {
            // Update the task text
            task.text = newText.trim();
            
            // Save to local storage
            saveTasks();
            
            // Update the display
            displayTasks();
        }
    }
}

// Function to delete a task
function deleteTask(taskId) {
    // Filter out the task with the matching id
    // This creates a new array without the deleted task
    tasks = tasks.filter(task => task.id !== taskId);
    
    // Save to local storage
    saveTasks();
    
    // Update the display
    displayTasks();
}

// Function to save tasks to local storage
function saveTasks() {
    // Convert tasks array to JSON string and save to local storage
    // Local storage can only store strings, so we use JSON.stringify
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    // Get tasks from local storage
    const storedTasks = localStorage.getItem('tasks');
    
    // If there are stored tasks, parse them back to an array
    if (storedTasks) {
        // JSON.parse converts the JSON string back to a JavaScript array
        tasks = JSON.parse(storedTasks);
    }
}