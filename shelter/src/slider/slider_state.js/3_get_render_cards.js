const getRenderCardsFromStateData = function (param, slides) {
    let result = [];

    if (param.mainStateSlider === false && param.stateData.length !== 0) {
        if (param.moveLeft && !param.moveRight) { 
            if (!param.backUp) {
                param.backUp = true;
                let firstSlide = param.stateData.slice(0, slides);
                let reversFirstSlides = firstSlide.reverse()
                result.push(...reversFirstSlides);
            } else {
                param.backUp = false;
                let lastSlide = param.stateData.slice(-slides);
                result.push(...lastSlide);
            }
        } else if (param.moveRight && !param.moveLeft) {
            if (!param.backUp) {
                param.backUp = true;
                let firstSlide = param.stateData.slice(0, slides);
                result.push(...firstSlide);
            } else {
                param.backUp = false;
                let lastSlide = param.stateData.slice(-slides);
                result.push(...lastSlide);
            }
        }
    } else {
        param.backUp = false;
    }

    return result;
}

export default getRenderCardsFromStateData;
