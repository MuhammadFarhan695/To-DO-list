

function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }

    var li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
  }
