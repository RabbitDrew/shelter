import petsStorage from "./0_0_pets_page_storage";
const setPageAmount = function (petStorage, firstPage, left, right, lastPage) {
  const btnNum = document.querySelector(".num");
  const getWidthWindow = window.innerWidth;
  let pageAmount;
  if (getWidthWindow > 768) {
    pageAmount = 6;
  } else if (getWidthWindow > 450 && getWidthWindow <=768) {
    pageAmount = 8;
  } else {
    pageAmount = 16;
  }

  if (firstPage) {
    petStorage.counter = 1;
  } else if (lastPage) {
    petStorage.counter = pageAmount;
  } else {
    //checking that fixed count error 
    if (typeof petStorage.counter === "undefined") {
      petStorage.counter = 1;
    }
    if (left && !right && petStorage.counter >1) {
      petStorage.counter--;
    } else if (!left && right && petStorage.counter < pageAmount) {
      petStorage.counter++;
    }
  }
  btnNum.textContent = petStorage.counter;
  /*change_btns_style*/

};

setPageAmount(petsStorage, false, false, false, false);

window.addEventListener("resize", () => {
  setPageAmount(petsStorage, false, false, false, false);
});

export default setPageAmount;
