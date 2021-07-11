const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];

function toDoSubmit(event) {
  event.preventDefault();
  const userToDo = toDoInput.value;
  toDoInput.value = "";
  const userToDoObj = {
    text: userToDo,
    id: Date.now(),
  };
  toDos.push(userToDoObj);
  paintToDo(userToDoObj);
}

function deleteToDo(event) {
  const chosenLi = event.target.parentElement;
  chosenLi.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(chosenLi.id));
  saveToDo();
}

function paintToDo(userToDo) {
  const li = document.createElement("li");
  li.id = userToDo.id;
  const span = document.createElement("span");
  span.innerText = userToDo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  saveToDo();
}

function saveToDo() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", toDoSubmit);

const saveToDos = localStorage.getItem("toDos");

if (saveToDos !== null) {
  const parsedToDo = JSON.parse(saveToDos);
  toDos = parsedToDo;
  parsedToDo.forEach(paintToDo);
}
