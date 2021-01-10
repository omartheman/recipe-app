const ingredients = [
  {item:'banana'}, 
  {item:'avocado'}, 
  {item:'pear'}
];

const newIngredients = ingredients.slice();

newIngredients[1] = {
  ...newIngredients[1],
  item: 'orange'
};

console.log('ingredients', ingredients);
console.log('newIngredients', newIngredients);
