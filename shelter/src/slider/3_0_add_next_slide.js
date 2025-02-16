const  addNextSlide = function (parentElement, 
                                newCards, 
                                renderCallback) {
newCards.forEach(card => { 
        renderCallback(parentElement, card.mainBlock, false, true)
});

}

export default addNextSlide