import clickHandlerPets from "./0_2_0_click_handler"

document.addEventListener('click', (event) => {
    if (event.target !== undefined) {
        clickHandlerPets(event)
    }else {
        return
    }

})