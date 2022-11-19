/***
 *
 *
 * Q1 => How to get data from API
 *
 * Ans:
 *
 *  1. fetch data from endpoint
 *  2.
 */

const loadPosts = () => {
  const endpoint = "https://jsonplaceholder.typicode.com/posts?userI";
  fetch(endpoint)
    .then((response) => response.json())
    .then((posts) => displayPosts(posts));
};

const displayPosts = (posts) => {
  const postsContainer = document.getElementById("posts-container");

  posts.map((post) => {
    const article = document.createElement("article");

    article.innerHTML = `<h2>${post.title} ${post.userId}</h2><p>${post.body}</p>`;
    postsContainer.append(article);
    console.log(post.title);
  });
};
