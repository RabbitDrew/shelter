import petsStorage from "./0_0_pets_page_storage";
import setPageAmount from "./3_pagination_count";
import clickHandlerPagination from "./0_2_1_pagination click_handlers";

const paginationBtn = document.querySelectorAll(".our-friends__btns");
paginationBtn[0].addEventListener("click", () => {
  console.log("<<");
  setPageAmount(petsStorage, true, false, false, false);
  clickHandlerPagination ()
  
});
paginationBtn[1].addEventListener("click", () => {
  console.log("<");
  setPageAmount(petsStorage, false, true, false, false);
  clickHandlerPagination ()

});
paginationBtn[3].addEventListener("click", () => {
  console.log(">");
  setPageAmount(petsStorage, false, false, true, false);
  clickHandlerPagination ()

});
paginationBtn[4].addEventListener("click", () => {
  console.log(">>");
  setPageAmount(petsStorage, false, false, false, true);
  clickHandlerPagination ()

});
