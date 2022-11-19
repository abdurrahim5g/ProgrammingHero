/**
 *
 *
 * In this file i will get all the album from JSON Placeholder
 */

const getAlbum = () => {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => showAlbum(data));
};

function showAlbum(albums) {
  const albumContainer = document.getElementById("all-album");
  albums.forEach((album) => {
    const singleAlbum = document.createElement("li");
    singleAlbum.innerHTML = `=> ${album.id} -> title: ${album.title}`;
    albumContainer.append(singleAlbum);
  });
}

getAlbum();
