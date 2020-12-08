const state = {
  ingredients: [0, 1]
}

let {ingredients} = state;
// ingredients[0] = 5;
const ingredientsContent = [...ingredients];
ingredientsContent[0] = 5;
ingredients = ingredientsContent;

console.log('changed ing',ingredients);
console.log('final state',state);