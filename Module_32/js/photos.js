/**
 *
 *
 *
 * In this file i will write all photos related api
 *
 */

const getPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => loadPhotos(data));
};

function loadPhotos(photos) {
  const photoContainer = document.getElementById("photo-container");
  const photosHtml = "";
  photos.forEach((photo) => {
    const singlePhoto = document.createElement("div");
    singlePhoto.classList.add("single-photo");
    singlePhoto.innerHTML = `<img src="${photo.thumbnailUrl}" alt="${photo.title}" />`;
    // photosHtml += singlePhoto;
    photoContainer.append(singlePhoto);
  });
  //   photoContainer.append(photosHtml);
}
