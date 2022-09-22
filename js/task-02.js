const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const foodContainer = document.querySelector('#ingredients');
let liArr = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemsLi = document.createElement("li");
  itemsLi.textContent = ingredients[i];
  itemsLi.classList.add('itemLi');
  liArr.push(itemsLi);
  foodContainer.append(...liArr);
   
}
console.log(foodContainer);
