function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  var li = document.createElement("li");

  var span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = function() {
    li.classList.toggle("done");
  };

  var editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = function() {
    var newTask = prompt("Edit your task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  var delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.className = "delete-btn";
  delBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}

