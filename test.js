const state  = {
  newImages: [1]
}
const oldImages = [...state.newImages]
oldImages[2] = 5;

console.log(oldImages)


console.log(state.newImages)