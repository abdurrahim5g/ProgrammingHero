/***
 *
 *
 * In this file I will do main functionality
 */

const searchButton = document.getElementById("searchButton");
const searchField = document.getElementById("searchField");

searchButton.addEventListener("click", () => {
  loadPhones(searchField.value);
});

searchField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    loadPhones(searchField.value);
    console.log(e.key);
  }
});

/**
 *
 * @param {searchString} searchString
 */
const loadPhones = async (searchString = "a") => {
  isLoading(true);
  displayPhoneContainer(false);
  const endpoint = `https://openapi.programming-hero.com/api/phones?search=${searchString}`;
  const res = await fetch(endpoint);
  const data = await res.json();
  displayPhones(data);
};
loadPhones();

const displayPhones = (data) => {
  const phones = data.data;
  if (data.status) {
    const phoneContainer = document.getElementById("phoneContainer");
    phoneContainer.textContent = "";

    phones.forEach((phone) => {
      const singlePhone = document.createElement("div");
      singlePhone.classList.add("single-phone");
      singlePhone.innerHTML = `
        <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}  <span class="badge bg-success">${phone.brand}</span></h5>
                <p class="card-text">Some quick example text to build on the card title</p>
                <button 
                    class="btn btn-primary"  
                    data-bs-toggle="modal" 
                    data-bs-target="#phoneDetails"
                    onclick="loadSinglePhoneDetails('${phone.slug}')"
                >
                    View full spefication
                </button>
            </div>
        </div>
      `;
      phoneContainer.append(singlePhone);
    });

    console.log(data.data);
    isLoading(false);
    displayPhoneContainer(true);
    phoneNotFound(false);
  } else {
    phoneNotFound(true);
    displayPhoneContainer(false);
    isLoading(false);
  }
};

/**
 *
 * @param {getSlug} slug
 */
const loadSinglePhoneDetails = async (slug = "apple_iphone_13_mini-11104") => {
  const endpoint = `https://openapi.programming-hero.com/api/phone/${slug}`;
  const res = await fetch(endpoint);
  const data = await res.json();
  displayPhoneDetails(data);
};

const displayPhoneDetails = (data) => {
  const phoneDetails = data.data;
  console.log(phoneDetails.mainFeatures);

  const phoneName = document.getElementById("phoneName");
  const phoneImage = document.getElementById("phoneImage");
  const mainFeatures = document.getElementById("mainFeatures");
  const pChipset = document.getElementById("pChipset");
  const pDisplay = document.getElementById("pDisplay");
  const pMemory = document.getElementById("pMemory");
  const pSensor = document.getElementById("pSensor");
  const pStorage = document.getElementById("pStorage");

  if (data.status) {
    phoneName.innerHTML = `${phoneDetails.name} <span class="badge bg-success">${phoneDetails.brand}</span>`;
    phoneImage.src = phoneDetails.image;
    pChipset.innerText = phoneDetails.mainFeatures.chipSet;
    pDisplay.innerText = phoneDetails.mainFeatures.displaySize;
    pMemory.innerText = phoneDetails.mainFeatures.memory;
    pSensor.innerText = phoneDetails.mainFeatures.sensors;
    pStorage.innerText = phoneDetails.mainFeatures.storage;
    console.log(phoneDetails.mainFeatures.sensors);
  }
};
