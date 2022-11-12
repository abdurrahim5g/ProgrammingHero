document.getElementById("addListItem").addEventListener("click", function () {
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.innerText = `Added new list`;
  ul.append(li);
});

document.getElementById("list").addEventListener("click", function (event) {
  console.log(event.target);
});
