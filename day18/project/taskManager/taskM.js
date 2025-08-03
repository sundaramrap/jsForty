function listFill() {
  const userInput = document.getElementById("taskInput");
  const userList = document.getElementById("taskList");
  const pInput = userInput.value;
  if (pInput.trim() === "") return;
  const li = document.createElement("li");
  li.innerText = pInput;
  userList.appendChild(li);
  userInput.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🦉";
  deleteBtn.classList.add("delstyle");
  li.appendChild(deleteBtn);
}

/**
 *  OnClick of Button we will  add the task  written in the taskInput to the list .
 * 1. adding function onClick on the button .
 * 2.getting the value from the userInput Box
 * 3. creating a li element
 * 4.Appending li ement inside the ul tag.
 *
 */
