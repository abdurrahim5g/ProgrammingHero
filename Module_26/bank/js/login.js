/**
 *
 *
 * In this file i will manage enter login system
 */
const login = document.getElementById("login");
login.addEventListener("submit", function () {
  event.preventDefault();
  const userEmail = document.getElementById("userEmail");
  const userPassword = document.getElementById("userPassword");

  const allUserDetails = [
    { userEmail: "hello@gmail.com", userPass: "Hello@#26" },
    { userEmail: "samius@gmail.com", userPass: "Hello@#26" },
    { userEmail: "kuddos@gmail.com", userPass: "Hello@#26" },
    { userEmail: "sorker@gmail.com", userPass: "Hello@#06" },
    { userEmail: "arahman@gmail.com", userPass: "Hello@#06" },
    { userEmail: "mdmasudulislam@gmail.com", userPass: "Hello@#06" },
    { userEmail: "hirakhandoker@gmail.com", userPass: "Hello@#06" },
    { userEmail: "antora@gmail.com", userPass: "Hello@#06" },
  ];
  if (userEmail.value === "" || userPassword.value === "") {
    alert("Please fill email and password field then try to login! 🚀🚀🚀");
  } else if (userEmail.value.includes("@")) {
    for (const user of allUserDetails) {
      console.log(user.userEmail);
      if (
        user.userEmail === userEmail.value &&
        user.userPass === userPassword.value
      ) {
        window.location.href = "account.html";
        return;
      }
    }
    console.log("Email or Password is wrong 😒😒😒");
  } else {
    alert("Please input a valid email");
  }
});
