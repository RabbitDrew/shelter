import clickHandler from "./2_0_slider_click_handler"

const btnL = document.querySelector('.btn--left')
const btnR = document.querySelector('.btn--right')

btnL.addEventListener ('click', () => {
    clickHandler(true, false)
})

btnR.addEventListener ('click', () => {
    clickHandler(false, true)
})