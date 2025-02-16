/*datat*/
import { stor } from "../global/0_storage"
import cardsArr from "../global/4_create_slider_cards_arr"
import {getShuffledArr } from "../global/5_cards_arr_shuffler"
import getRenderEl from "./1_get _render_el"
import { sliderWindow } from "../global/0_storage"
import {sliderLine } from "../global/0_storage"

/*state*/
import stateStorage from "./slider_state.js/0_state_storage"
import stateSwitcher from "./slider_state.js/1_1_switch_state."
import createStateArr from "./slider_state.js/2_create_state_arr"
import getRenderCardsFromStateData from "./slider_state.js/3_get_render_cards"

/*render on the page*/
import renderEl from "../global/3_renderElemnts"
/*left btn*/
import addPrevSlide from "./2_0_add_prev_slide"
import moveLeft from "./5_0_move_left"
import removePrevSlide from "./2_1_remove_prev_cards"
/*right btn*/
import addNextSlide from "./3_0_add_next_slide"
import moveRight from "./5_1_move_right"
import removeNextSlide from "./3_1_remove_next_cards"


let getShuffledBaseArr
let newCards
let oldCards

const clickHandlerAdopt = function (left, right) {
    if (left && !right ) {
        console.log('left')
        stateSwitcher(stateStorage, left, right)
        getShuffledBaseArr = getShuffledArr(cardsArr)
        newCards = getRenderEl(getShuffledBaseArr , 3)
        createStateArr(newCards, stateStorage, cardsArr, left, right)
        oldCards = getRenderCardsFromStateData(stateStorage, 3)
        setTimeout (() => {
           if (stateStorage.mainStateSlider === true ){
             //oldCards.length = 0
              addNextSlide(sliderLine, newCards, renderEl)
              moveLeft (sliderLine, sliderWindow)
              setTimeout (() => {removePrevSlide(sliderLine, 3)},500)
          }else if (stateStorage.mainStateSlider === false) {
              newCards.length = 0
              addNextSlide(sliderLine, oldCards, renderEl)
              moveLeft (sliderLine, sliderWindow)
          }
           console.log(stor.pos)
           }, 2)
    } else {
        console.log('right')
        stateSwitcher(stateStorage, left, right)
        getShuffledBaseArr = getShuffledArr(cardsArr)
        newCards = getRenderEl(getShuffledBaseArr , 3)
        createStateArr(newCards, stateStorage, cardsArr, left, right)
        oldCards = getRenderCardsFromStateData(stateStorage, 3)
        setTimeout (() => {
            if (stateStorage.mainStateSlider === true ){
                //oldCards.length = 0
                addPrevSlide(sliderLine, newCards, renderEl)
                moveRight (sliderLine, sliderWindow)
                setTimeout (() => {removeNextSlide (sliderLine, 3)},500)
            }else if (stateStorage.mainStateSlider === false){
                newCards.length = 0
                addPrevSlide(sliderLine, oldCards, renderEl)
                moveRight (sliderLine, sliderWindow)
            }
            console.log(stor.pos)
        },2)
    }
}   
export default clickHandlerAdopt
