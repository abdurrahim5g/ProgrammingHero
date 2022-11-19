/**
 *
 *
 * In this file i will fetch API with fetch function
 *
 */

// try simple toto JSON
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  response.json()
);
//   .then((json) => console.log(json));

// try with user

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      const allUserContainer = document.getElementById("allUsers");
      allUserContainer.innerHTML = "";

      const singleUser = document.createElement("div");
      singleUser.classList.add("card");
      singleUser.classList.add("mb-5");

      users.forEach((user) => {
        const singleUser = document.createElement("div");
        singleUser.classList.add("card");
        singleUser.classList.add("mb-5");
        singleUser.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${(user.id, user.name)}</h5>
                <p class="card-text">User Email: ${user.email}</p>
                <p>User City: ${user.address.city}</p>
            </div>
        `;
        console.log(user.name);
        allUserContainer.append(singleUser);
      });
    });
}
