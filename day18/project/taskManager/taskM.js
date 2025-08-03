function listFill() {
  const userInput = document.getElementById("taskInput");
  const userList = document.getElementById("taskList");
  const pInput = userInput.value;
  if (pInput.trim() === "") return;

  //Creating of List

  const li = document.createElement("li");
  li.innerText = pInput;
  li.classList.add("fontStyle");
  userList.appendChild(li);
  userInput.value = "";

  //Complete Button

  const compBtn = document.createElement("button");
  compBtn.innerText = "🐸";
  compBtn.classList.add("btnstyle");
  compBtn.onclick = function () {
    li.classList.toggle("compbtn");
  };
  li.appendChild(compBtn);

  //Edit Button
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";
  editBtn.classList.add("btnstyle");
  editBtn.onclick = function () {
    const textEdit = li.firstChild;
    console.log(textEdit);
  };

  li.appendChild(editBtn);

  //Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "🦉";
  deleteBtn.classList.add("btnstyle");
  deleteBtn.onclick = function () {
    li.remove();
  };
  li.appendChild(deleteBtn);
}

function searchFilter() {
  const userSer = document.getElementById("searchInput");
  const serInput = userSer.value;
  const items = document.querySelectorAll("ul#taskList li");

  //items in the list will be taken out

  items.forEach((item) => {
    item.style.display = item.innerText
      .toLowerCase()
      .includes(serInput.toLowerCase())
      ? "block"
      : "none";
  });
}
/**
 *  OnClick of Button we will  add the task  written in the taskInput to the list .
 * 1. adding function onClick on the button .
 * 2.getting the value from the userInput Box
 * 3. creating a li element
 * 4.Appending li ement inside the ul tag.
 *
 */
