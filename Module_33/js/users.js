/***
 *
 *
 * In this file i will write the fetch api to get Random users
 *
 */

const loadUsers = () => {
  fetch("https://randomuser.me/api/?results=12")
    .then((res) => res.json())
    .then((users) => displayUsers(users));
};

const displayUsers = async (users) => {
  const usersObj = users.results;
  const usersContainer = document.getElementById("users");
  let usersHTML = "";
  usersObj.map((user) => {
    const singleUser = `<div class="single-user">
                                <img src="${user.picture.large}" alt="${user.login.username}" />
                                <h4>${user.login.username}</h4>
                                <h5>${user.email}</h5>
                                <p><strong>Age: </strong><span>${user.dob.age}</span></p>
                                <p><strong>From: </strong><span>${user.location.country}</span></p>
                            </div>`;
    usersHTML += singleUser;
  });
  usersContainer.innerHTML = usersHTML;
};
