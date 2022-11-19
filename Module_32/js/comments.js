/***
 *
 *
 * In this file i will write all the comments
 */

const getComments = () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((comments) => showComments(comments));
};

function showComments(comments) {
  const commentContainer = document.getElementById("connents-container");
  comments.forEach((comment) => {
    const singleComment = document.createElement("div");
    singleComment.classList.add("single-comment");
    singleComment.innerHTML = `<div>${comment.body}</div><h3>Comment by: ${comment.email}`;

    commentContainer.append(singleComment);
  });
}
