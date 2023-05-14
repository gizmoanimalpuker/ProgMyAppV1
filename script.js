let foodArray = [];

let FoodObject = function (calories, fats, proteins, carbs, foodName) {
    this.calories = calories;
    this.fats = fats;
    this.proteins = proteins;
    this.carbs = carbs;
    this.foodName = foodName;
    this.ID = Math.random().toString(16).slice(5)
};

foodArray.push(new FoodObject(250, 10, 20, 30, "Grilled chicken"));
foodArray.push(new FoodObject(100, 5, 2, 10, "Salad"));
foodArray.push(new FoodObject(400, 25, 30, 45, "Steak"));

let selectedType = "";

document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.getItem("foodArray")) {
      foodArray = JSON.parse(localStorage.getItem("foodArray"));
    }
  
    createList();
  
    document.getElementById("addButton").addEventListener("click", function () {
      foodArray.push(new FoodObject(
        document.getElementById("calorieInput").value,
        document.getElementById("fatInput").value,
        document.getElementById("proteinInput").value,
        document.getElementById("carbInput").value,
        document.getElementById("dataInput").value
      ));
  
      localStorage.setItem("foodArray", JSON.stringify(foodArray));
  
      document.getElementById("calorieInput").value = "";
      document.getElementById("fatInput").value = "";
      document.getElementById("proteinInput").value = "";
      document.getElementById("carbInput").value = "";
      document.getElementById("dataInput").value = "";
  
      createList();
    });
  
    $(document).on("pagebeforeshow", "#view-foods-page", function (event) {
      if (localStorage.getItem("foodArray")) {
        foodArray = JSON.parse(localStorage.getItem("foodArray"));
        createList();
      }
    });
  
    $(document).on("change", "#select-type", function (event, ui) {
      selectedType = document.getElementById("select-type").value;
    });
  });
  

function createList() {
    var foodUl = document.getElementById("foodUl");
    foodUl.innerHTML = "";

    foodArray.forEach(function (element,) {
        var li = document.createElement('li');
        li.innerHTML = element.foodName + ": " + element.calories + " calories, " + element.fats + "g fat, " + element.proteins + "g protein, " + element.carbs + "g carbs";
        foodUl.appendChild(li);
    });
};
