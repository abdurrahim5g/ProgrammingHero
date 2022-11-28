/**
 *
 * In this file i will load random user data and show data in HTML File
 */

// Fetch the API
const fetchUsersAPI = () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((users) => displayUsers(users.results));
};

const displayUsers = (users) => {
  const user = users[0];
  const userContainer = document.getElementById("s-user");
  userContainer.innerHTML = `<div class="single-user">
                                <img src="${user.picture.large}" alt="${user.login.username}" />
                                <h4>${user.login.username}</h4>
                                <h5>${user.email}</h5>
                                <p><strong>Age: </strong><span>${user.dob.age}</span></p>
                                <p><strong>From: </strong><span>${user.location.country}</span></p>
                            </div>`;
};
