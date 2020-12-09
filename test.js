const state = {
  ingredients: [{ingredient: '', amount: ''}, {ingredient: '', amount: ''}]
}

let {ingredients} = state;
// ingredients[0] = 5;
const ingredientsContent = [...ingredients];
let ingredientsContentIngredient = ingredientsContent[0].ingredient;
ingredientsContentIngredient = 'flour';
ingredientsContent 
ingredients = ingredientsContent;

console.log('changed ing',ingredients);
console.log('final state',state);