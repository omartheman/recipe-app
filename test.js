const state  = {
  images: [1,2,3]
}
const images = [...state.images]
images.splice(1, 1)

console.log(state.images)
console.log(images)

