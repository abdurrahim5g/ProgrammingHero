/**
 *
 *
 * In this file i will show all write all todo code
 */

const loadAllTodo = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => diaplayTodo(todos));
};

function diaplayTodo(todos) {
  const todoContainer = document.getElementById("todoContainer");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    const singleTodo = document.createElement("div");
    if (todo.completed) {
      // singleTodo.classList.add("complete")
      singleTodo.style.background = "#00f0ff";
    }

    singleTodo.innerHTML = `
    <div class="single-todo"><h3>${todo.title}</h3> <span>${
      todo.completed ? todo.completed : "False"
    }</span><div>
    `;
    todoContainer.append(singleTodo);
    console.log(todo);
  });
}

loadAllTodo();
