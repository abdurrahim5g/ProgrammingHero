/**
 *
 *
 * In this file i will learn TheMealDB
 */

const loadMeal = (searchText = "") => {
  const endPoint = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  console.log(endPoint);
  fetch(endPoint)
    .then((res) => res.json())
    .then((data) => displayMeal(data));
};
loadMeal();

const displayMeal = (meals) => {
  const mealsContainer = document.getElementById("mealsContainer");
  const allMeals = meals.meals;
  let mealsHTML = "";

  console.log(meals);

  if (allMeals !== null) {
    allMeals.forEach((meal) => {
      mealsHTML += `<div class="meal-card">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <h3>${meal.strMeal}</h3>
                    <p>
                        ${meal.strInstructions.slice(0, 70)}... 
                        <a href="#" onclick=displayMoreMealInfo(this) >
                           Learn More <span>${meal.strInstructions}</span>
                        </a>
                    </p>
                </div>`;
    });
  } else {
    mealsHTML = "Not Available";
  }
  mealsContainer.innerHTML = mealsHTML;
};

/**
 *
 * In this section i will control the modal
 */
const modal = document.getElementById("modal");
const backdrop = document.getElementById("backdrop");
const details = document.getElementById("details");

const displayMoreMealInfo = (element) => {
  const mealDetails = element.children[0].innerText;

  backdrop.style.display = "block";
  modal.style.display = "block";

  setTimeout(
    (details.innerHTML = `
    <div class="meal-details"> 
        <h3>Instruction for foodName</h3>
        <p>${mealDetails}</p>
    </div>`),
    1000
  );
  return false;
};

// close modal
backdrop.addEventListener("click", function () {
  backdrop.style.display = "none";
  modal.style.display = "none";
});

/**
 *
 *
 * Let's start creating the search functiniolity
 */

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  const searchString = document.getElementById("searchString").value;
  if (searchString) {
    loadMeal(searchString);
  } else {
    alert("Please write something and then search");
  }
});
