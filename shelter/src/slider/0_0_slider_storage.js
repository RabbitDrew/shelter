import cardsArr from "../global/4_create_slider_cards_arr"
import { getShuffledArr } from "../global/5_cards_arr_shuffler"

const sliderStorage = {
    sliderStep: 0, 
    shaffledArr: getShuffledArr(cardsArr), 
    slidesToShow:[],
    oldSlidesBackup:[],
    /*status veriable*/
    moveLeft: false, 
    moveRight: false, 
    sliderStatus: false
}

export default sliderStorage