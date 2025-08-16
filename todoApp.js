const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const topDiv = document.createElement("div");
    topDiv.classList.add("task-top");

    const spanText = document.createElement("span");
    spanText.textContent = taskText;

    const delBtn = document.createElement("span");
    delBtn.textContent = "✖";
    delBtn.classList.add("delete-btn");
    delBtn.onclick = function() {
        li.remove();
    };

    topDiv.appendChild(spanText);
    topDiv.appendChild(delBtn);

    const dateSpan = document.createElement("div");
    dateSpan.classList.add("task-date");
    dateSpan.textContent = "Added: " + new Date().toLocaleString();

    li.appendChild(topDiv);
    li.appendChild(dateSpan);

    li.addEventListener("click", function(e) {
        if (e.target !== delBtn) {
            li.classList.toggle("completed");
        }
    });

    taskList.appendChild(li);
    taskInput.value = "";
}
