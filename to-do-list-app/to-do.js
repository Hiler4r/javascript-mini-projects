const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("button");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "flex items-center justify-between bg-white/20 rounded-lg px-3 py-2";

        const span = document.createElement("span");
        span.textContent = task.text;
        span.className = `flex-1 ${task.done ? 'line-through opacity-70' : ''}`;
        span.addEventListener("click", () => toggleTask(index));

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✕";
        removeBtn.className = "ml-2 text-red-400 hover:text-red-600";
        removeBtn.addEventListener("click", () => removeTask(index));

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
}

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => e.key === "Enter" && addTask());

renderTasks();