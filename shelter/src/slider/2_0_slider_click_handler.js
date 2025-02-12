import sliderStorage from "./0_0_slider_storage"
import { getSlides } from "./3_0_test"
import { showSlidesOnPAge } from "./3_0_test"
import { sliderMove } from "./3_0_test"
import { removeElementsFromPage } from "./3_0_test"
import renderEl from "../global/3_renderElemnts"

import { changeStatus } from "./3_0_test"

 let sliderWindow = document.querySelector('.our-friends__window')
 let sliderLine = document.querySelector('.slider__exposition')

const clickHandler = function (left, right) {
changeStatus (sliderStorage, left, right)
getSlides (sliderStorage, 3)
showSlidesOnPAge (sliderLine, sliderStorage, left, right)
sliderMove(sliderStorage, sliderWindow, sliderLine, left, right)
setTimeout(() => {removeElementsFromPage(sliderLine, 3, left, right)},500)
}

export default clickHandler