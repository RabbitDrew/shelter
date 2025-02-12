import petsStorage from "./0_0_pets_page_storage"
import renderEl from "../global/3_renderElemnts"
import changePage from "./4._change_page"
import { mainCardsArr } from "./1_create_arr_render_el"
import changeBtnStyle from "./5_stop_update_page"

const clickHandlerPagination = function () {
changePage (mainCardsArr, renderEl, petsStorage)
console.log(petsStorage)
changeBtnStyle(petsStorage)
}
    
export default clickHandlerPagination