/**
 *
 *
 *
 * In this file i will learn async await with API
 */

const loadMeals = async () => {
  try {
    console.log("first");
    const endpoint = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
    console.log("secound");
    const res = await fetch(endpoint);
    if (res) {
      console.log("third");
    }
    const data = await res.json();
    console.log("last");
    displayMeal(data.meals);
  } catch (error) {
    console.log(error);
  }
};

const displayMeal = (mealsData) => {
  const mealList = document.getElementById("mealsList");
  mealsData.forEach((meal, index) => {
    const li = document.createElement("li");
    li.innerText = meal.strMeal;
    mealList.append(li);
  });
};

loadMeals();
