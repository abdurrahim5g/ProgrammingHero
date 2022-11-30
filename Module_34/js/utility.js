/**
 *
 *
 * In this file i will write all utility files
 */

/**
 *
 * @param {true, false} noPhone this will get true or false
 */
const phoneNotFound = (noPhone = false) => {
  const notFound = document.getElementById("notFound");
  if (noPhone) {
    notFound.classList.remove("d-none");
  } else {
    notFound.classList.add("d-none");
  }
};

/**
 *
 *
 *
 *
 * @param {true, false} display this param get either true of false => if true then display "#phoneContainer" otherwise hide
 */
const displayPhoneContainer = (display) => {
  const phoneContainer = document.getElementById("phoneContainer");
  if (display) {
    phoneContainer.classList.remove("d-none");
  } else {
    phoneContainer.classList.add("d-none");
  }
};

/**
 *
 *
 *
 *
 * @param {true, false} loading if loading is true then show the loading speaner on the document => otherwise hide
 */
const isLoading = (loading = false) => {
  const loadingElement = document.getElementById("loading");

  if (loading) {
    loadingElement.classList.remove("d-none");
  } else {
    loadingElement.classList.add("d-none");
  }
};
