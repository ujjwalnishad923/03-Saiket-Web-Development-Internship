let completed = 0;


// Add Task
function addTask() {

    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    let task = document.createElement("span");
    task.innerText = taskText;

    // Complete task
    task.onclick = function () {

        if (task.classList.contains("completed")) {
            task.classList.remove("completed");
            completed--;
        } else {
            task.classList.add("completed");
            completed++;
        }

        document.getElementById("completedCount").innerText = completed;
    };


    // Delete button
    let deleteButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {

        if (task.classList.contains("completed")) {
            completed--;
            document.getElementById("completedCount").innerText = completed;
        }

        li.remove();
    };


    li.appendChild(task);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}