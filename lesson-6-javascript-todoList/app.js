let form = document.querySelector('form');
let taskInput = document.querySelector('#task-input');
let submitBtn = document.querySelector('#submit-button');
let taskList = document.querySelector('#task-list');
let erorMessage = document.querySelector('#error-message');
let noTasksText = document.querySelector('#no-tasks-text');

submitBtn.addEventListener("click", function () {
    if (taskInput.value === '') {
        erorMessage.innerHTML = 'Please enter a task';
        erorMessage.classList.add('p-2', 'bg-red-500', 'text-white');

    } 
    else {
        const newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value;
        newTask.classList.add('p-2', 'm-2', 'bg-white');

        taskList.appendChild(newTask);
        
        noTasksText.innerHTML = '';
        erorMessage.innerHTML = '';
        erorMessage.classList.remove('p-2', 'bg-red-500', 'text-white');
    }
});
