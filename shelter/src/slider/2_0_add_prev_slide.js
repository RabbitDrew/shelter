const  addPrevSlide = function (parentElement, 
                                newCards, 
                                renderCallback) {
newCards.forEach(card => {
    renderCallback(parentElement, card.mainBlock, true, false)
});

}

export default  addPrevSlide