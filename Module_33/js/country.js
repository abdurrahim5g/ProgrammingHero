/***
 *
 *
 * In this file I will learn Rest API
 *
 */

const loadCountry = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((allCountry) => {
      displayCountry(allCountry);
      // storeCountryDetails(allCountry);
    });
};

// const storeCountryDetails = (allCountry = []) => {
//   return allCountry;
// };

const displayCountry = (allCountry) => {
  const countryContainer = document.getElementById("all-country");
  // console.log(allCountry);

  allCountry.forEach((country, index) => {
    if (index >= 100) return;

    const div = document.createElement("div");
    div.classList.add("country");

    if (country.independent) {
      div.classList.add("independent");
    }

    div.innerHTML = `
        <img src="${country.flags.svg}" alt="${country.name}" />
        <div class="content">
            <h2  onclick=loadCountryDetails(${index})>
              ${country.name} <span>${country.alpha2Code}</span>
            </h2>
            <ul>
                <li>Capital: ${country.capital}</li>
                <li>Calling Code: ${country.callingCodes}</li>
                <li>Region: ${country.region}</li>
                <li>Sub Region: ${country.subregion}</li>
                <li>Population: ${country.population}</li>
                <li>Borders: ${country.borders}</li>
                <li>
                    Currencies: ${
                      country.currencies
                        ? country.currencies[0].name
                        : "No Currencies"
                    } 
                    <sup> ${
                      country.currencies
                        ? country.currencies[0].symbol
                        : "No Currencies"
                    } </sup>
                </li>
                <li>Language: ${country.languages[0].name}</li>
                <li>
                    ${country.name} is: 
                    ${country.independent ? "Independent" : "Dependent"}
                </li>
            </ul>
        </div>
        
    `;
    countryContainer.append(div);
  });
};

const loadCountryDetails = (index) => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data, index));
};

/**
 *
 * Modal start from hear
 */
const backdrop = document.getElementById("backdrop");
const modal = document.getElementById("modal");
const displayCountryDetails = (data, index) => {
  backdrop.style.display = "block";
  modal.style.display = "block";

  const capital = document.getElementById("capital");
  if (data[index].capital) {
    capital.innerText = `${data[index].capital} is a capital of ${data[index].name}`;
  } else {
    capital.innerText = `${data[index].name} isn't have any capital`;
  }
  console.log(data[index].name);
};

backdrop.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
