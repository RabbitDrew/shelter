import { shuffleddArr } from "../global/5_cards_arr_shuffler"
import renderEl from "../global/3_renderElemnts"
import { sliderLine } from "../global/0_storage"

let activCards = 0
const initBaseEl = function (parentElement,cardsArr,
                             activCards,renderCallback) { 
  activCards = 3 
  for (let i = 0; i < activCards; i++) {
    //console.log(cardsArr[i].mainBlock)
    renderCallback(parentElement,cardsArr[i].mainBlock, false , true) 
   } 
   console.log(parentElement)
}

initBaseEl (sliderLine,shuffleddArr,activCards, renderEl)

export default activCards