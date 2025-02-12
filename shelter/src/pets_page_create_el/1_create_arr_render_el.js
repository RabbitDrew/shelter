import cardsArr from "../global/4_create_slider_cards_arr"
export let mainCardsArr = []
let arrOfDifferentCards = []
cardsArr.forEach(el => {
    if(el.mainBlock.classList.contains('exposition__card')) {
      el.mainBlock.classList.remove('exposition__card')
      el.mainBlock.classList.add('our-friends__card')
    }
    mainCardsArr.push(el)
})

console.log(mainCardsArr)
const getArraysOfMatrix = (mainCardsArr) =>  {
    let result = []
    for (let i =0; i<6; i++) {
        let subArr = []
            subArr.push(...mainCardsArr)
        if (!result.includes(subArr)){
            result.push(subArr)
        }
    }
    return result
}
arrOfDifferentCards = getArraysOfMatrix(mainCardsArr)

export default arrOfDifferentCards
//console.log(arrOfDifferentCards)