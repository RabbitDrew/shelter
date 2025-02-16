/*import { stor } from "../global/0_storage"

import cardsArr from "../global/4_create_slider_cards_arr"
import {getShuffledArr } from "../global/5_cards_arr_shuffler"
import getRenderEl from "./1_get _render_el"
import { sliderWindow } from "../global/0_storage"
import {sliderLine } from "../global/0_storage"

//state manaage


import renderEl from "../global/3_renderElemnts"

import addPrevSlide from "./2_0_add_prev_slide"
import removePrevSlide from "./2_1_remove_prev_cards"
import addNextSlide from "./3_0_add_next_slide"
import removeNextSlide from "./3_1_remove_next_cards"

import moveLeft from "./5_0_move_left"
import moveRight from "./5_1_move_right"



const btnLAdopt = document.querySelector('.btn_adopt--left')
const btnRAdopt = document.querySelector('.btn_adopt--right')



//adopt btn block
btnLAdopt.addEventListener ('click', () => {
    console.log('left')


    const getShuffledBaseArr = getShuffledArr(cardsArr)
    const newCards = getRenderEl(getShuffledBaseArr , 1)
    addNextSlide(sliderLine, newCards, renderEl)
    moveLeft (sliderLine, sliderWindow)
    setTimeout (() => {removePrevSlide(sliderLine, 1)},500)
    //newCards.forEach(el=>{console.log(el)})
    console.log(sliderLine)
   })

btnRAdopt.addEventListener ('click', () => {
    console.log('tight')

    const getShuffledBaseArr = getShuffledArr(cardsArr)
    const newCards = getRenderEl(getShuffledBaseArr , 1)
    addPrevSlide(sliderLine, newCards, renderEl)
    moveRight (sliderLine, sliderWindow)
    setTimeout (() => {removeNextSlide (sliderLine, 1)},500)
    //newCards.forEach(el=>{console.log(el.mainBlock)})
    console.log(sliderLine)
})
*/



import clickHandlerAdopt from "./0_2_1_click_handler_adopt";
const btnLAdopt = document.querySelector('.btn_adopt--left')
const btnRAdopt = document.querySelector('.btn_adopt--right')
let isAnimating = false;

function handleButtonClick(isLeft, isRight) {
    if (isAnimating) return;
    
    isAnimating = true;


    btnLAdopt.classList.add('btn--disabled');
    btnRAdopt.classList.add('btn--disabled');

    clickHandlerAdopt(isLeft, isRight);

    setTimeout(() => {
        isAnimating = false;
        btnLAdopt.classList.remove('btn--disabled');
        btnRAdopt.classList.remove('btn--disabled');
    }, 510); 
}

btnLAdopt.addEventListener('click', () => handleButtonClick(true, false));
btnRAdopt.addEventListener('click', () => handleButtonClick(false, true));


