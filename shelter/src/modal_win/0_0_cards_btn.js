import clickHandler from "./0_1_click_handler"

document.addEventListener('click', (event) => {
    if (event.target !== undefined) {
        clickHandler(event)
    }else {
        return
    }

})