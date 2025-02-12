import pets from '../global/pets.json'
let dataList = [];
pets.forEach(pet => {
  for (let k in pet) {
    if (Array.isArray(pet[k])) {
       pet[k] = pet[k].join('')
    }
 }
})
dataList=[...pets]
export default dataList
