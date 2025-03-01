let todoList = [
  {
    item: "Buy Milk",
    dueDate: "03/01/2025",
  },
  {
    item: "Go to college",
    dueDate: "03/01/2025",
  },
];
displayItems();

function addTodo() {
  let todoInput = document.querySelector(".todo-input");
  let dateInput = document.querySelector(".date-input");
  todoList.push({ item: todoInput.value, dueDate: dateInput.value });
  todoInput.value = "";
  dateInput.value = "";
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="delete-btn" onClick="todoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
