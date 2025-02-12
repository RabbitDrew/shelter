import modalWinArr from "../modal_win/1_creaate_modal_win"
import renderEl from "../global/3_renderElemnts"
import openModalWindow from "../modal_win/2_0_open_window"
import closeModalWindow from "../modal_win/2_1_close_window"
const statWindow = {
    winIsOpen:false
}
const clickHandlerPets = function (event) {
if (!statWindow.winIsOpen) {
    openModalWindow(event, modalWinArr, renderEl, statWindow, ".our-friends__card");
}else {
    closeModalWindow(event, statWindow);

}
}

export default clickHandlerPets