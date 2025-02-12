const openModalWindow = function (event, 
                                  modalWindsArr, 
                                  callbackRender,
                                  stateWindow,
                                  classOfCard) {
    const page = document.querySelector('.page');
    const main = document.querySelector(".page-main");
    const cards = document.querySelectorAll(classOfCard)

    let getRenderCard = null;
    cards.forEach(card=> {
       let cardTitle = card.querySelector('.card__title')
       if (card && card.contains(event.target)) {
        getRenderCard = modalWindsArr.find(el => el.name.trim().toLowerCase() === cardTitle.textContent.trim());
       }

    })
    if (getRenderCard) {
        callbackRender(main, getRenderCard.mainBlock, false, true);
        getRenderCard.mainBlock.classList.remove("modal-win__bg--hide");
        getRenderCard.mainBlock.classList.add("page-modal-win__container");
        page.style.overflow = "hidden";
        stateWindow.winIsOpen = true
    }

};
export default openModalWindow
/*.exposition__card*/

