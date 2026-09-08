const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const removeTaskButton = document.getElementById("removeTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
});


removeTaskButton.addEventListener("click", function () {

    if (taskList.children.length === 0) {
        return;
    }

    taskList.removeChild(taskList.lastElementChild);
});