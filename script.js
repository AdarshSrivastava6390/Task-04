const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');

let tasks = [];

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
    }
});

addTaskBtn.addEventListener('click', () => {
    const taskValue = taskInput.value.trim();
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = '';
    }
});

function addTask(taskValue) {
    const task = {
        id: Date.now(),
        value: taskValue,
        completed: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
    };
    tasks.push(task);
    displayTasks();
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.value} - ${task.date} ${task.time}`;
        if (task.completed) {
            taskElement.style.textDecoration = 'line-through';
        }
        taskList.appendChild(taskElement);
    });
}

// Add event listener to task list to mark tasks as completed
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const taskValue = e.target.textContent;
        const taskIndex = tasks.findIndex((task) => task.value === taskValue);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = !tasks[taskIndex].completed;
            displayTasks();
        }
    }
});