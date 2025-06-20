const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounter() {
    const completedTasks = document.querySelectorAll("li.completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
}

function addTask() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please enter a valid task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    li.innerHTML = `
        <label>
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${task}</span>
        </label>
        <span class="edit-btn">Edit</span>
        <span class="delete-btn">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";

    // Select elements inside the current li
    const checkbox = li.querySelector(".task-checkbox");
    const editBtn = li.querySelector(".edit-btn");
    const taskSpan = li.querySelector(".task-text");
    const deleteBtn = li.querySelector(".delete-btn");

    // Checkbox toggle
    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateCounter();
    });

    // Edit button
    editBtn.addEventListener("click", function () {
        const updatedText = prompt("Edit Task", taskSpan.textContent);
        if (updatedText !== null && updatedText.trim() !== "") {
            taskSpan.textContent = updatedText.trim();
            li.classList.remove("completed"); // Optional: remove completed status when editing
            checkbox.checked = false;
            updateCounter();
        }
    });

    // Delete button
    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCounter();
    });

    updateCounter(); // Call this when a new task is added
}
