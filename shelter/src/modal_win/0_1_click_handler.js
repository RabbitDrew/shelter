import modalWinArr from "./1_creaate_modal_win"
import renderEl from "../global/3_renderElemnts"
import openModalWindow from "./2_0_open_window"
import closeModalWindow from "./2_1_close_window"

const statWindow = {
    winIsOpen:false
}


const clickHandler = function (event) {

if (!statWindow.winIsOpen) {
    openModalWindow(event, modalWinArr, renderEl, statWindow, ".exposition__card");
}else {
    closeModalWindow(event, statWindow);

}
//console.log(statWindow.winIsOpen)
}

export default clickHandler