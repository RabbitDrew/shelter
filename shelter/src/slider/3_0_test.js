import { getShuffledArr } from "../global/5_cards_arr_shuffler"
import cardsArr from "../global/4_create_slider_cards_arr"

/*slider status*/
export const changeStatus = function (sliderStorage, left, right) {
    if (left && !right ) {

        if (sliderStorage.moveLeft === false &&  sliderStorage.moveRight === true ) {
            sliderStorage.sliderStatus = true
        }else {
            sliderStorage.sliderStatus = false
        }
        sliderStorage.moveLeft = true
        sliderStorage.moveRight = false 
    
    } else {
            if (sliderStorage.moveLeft === true &&  sliderStorage.moveRight === false ) {
                sliderStorage.sliderStatus = true
            }else {
                sliderStorage.sliderStatus = false
            }
            sliderStorage.moveRight = true
            sliderStorage.moveLeft = false
    }
    console.log('left-'+sliderStorage.moveLeft,
                'status-'+sliderStorage.sliderStatus,
                'right-'+sliderStorage.moveRight,                 )
}

/*get slides on thee page*/
//new slides
const getNewSlides = (sliderStorage, count) => {
    sliderStorage.shaffledArr = getShuffledArr(cardsArr);
    let slidesToShow = [];

    const cardsOnPage = Array.from(document.querySelectorAll('.card__title')).map(title => title.textContent.trim())
    slidesToShow = sliderStorage.shaffledArr.filter(card => {
        return !cardsOnPage.includes(card.name.trim());
    });

    slidesToShow = slidesToShow.slice(0, count);
    slidesToShow= getShuffledArr(slidesToShow)
    return slidesToShow
    //sliderStorage.slidesToShow = [...slidesToShow]
    //cardsOnPage.forEach(el=> console.log(el.textContent))
    //console.log(cardsOnPage)
    //console.log( sliderStorage.slidesToShow)
}

/*get slides from page  it stores moved carrds!!!!*/
/*find objects from main arr*/
const getPageSlides = () => {
    let stateSlides = []
    
    const pageSlides =Array.from (document.querySelectorAll('.card__title')).map(h2 => h2.textContent.toLowerCase());
    cardsArr.forEach((el, i) => {
        const matchedCard = cardsArr.find(el => el.name.toLowerCase() ===pageSlides[i]);
        if (matchedCard) {
            stateSlides.push(matchedCard); 
        }
    })  
    return stateSlides
}
export const getSlides = function (sliderStorage, count) {
    const oldSlides = getPageSlides();
    if (!sliderStorage.sliderStatus) {
        sliderStorage.slidesToShow = getNewSlides(sliderStorage, count); 
    } 
    else {
        sliderStorage.slidesToShow = [...sliderStorage.oldSlidesBackup]; 
    }
    sliderStorage.oldSlidesBackup = [...oldSlides]; 
};

/*render slides*/
export const showSlidesOnPAge = function (parentElement,
                                         sliderStorage, 
                                         left, right) {                            
    sliderStorage.slidesToShow.forEach(card => {
        if (left && !right) {
            parentElement.append(card.mainBlock)
        }else {
            parentElement.prepend(card.mainBlock)
        }
    });
}


/*move slides*/
export const sliderMove = function (sliderStorage, sliderWindow, sliderLine, left,right) {
  
    const sliderWinWidth = sliderWindow.offsetWidth

    const getParentElPropertyCss= getComputedStyle(sliderLine)
    const gap = parseInt(getParentElPropertyCss.getPropertyValue('gap'));
    const step = sliderWinWidth + gap


    if (left &&!right) {
        sliderWindow.style.justifyContent = 'flex-end';
        sliderStorage.sliderStep +=step
        sliderLine.style.transform = `translateX(${sliderStorage.sliderStep}px)`
    
        if (sliderStorage.sliderStep  >= step) {
            sliderLine.style.transition = 'none';
            sliderLine.offsetWidth; 
    
            sliderStorage.sliderStep = 0; 
    
            sliderLine.style.transition = 'transform 0.5s ease';
            sliderLine.style.transform = `translateX(${sliderStorage.sliderStep}px)`
    
        }

    }else {
        sliderWindow.style.justifyContent = 'flex-start';
        sliderStorage.sliderStep -=step
        sliderLine.style.transform = `translateX(${sliderStorage.sliderStep}px)`
    
        if (sliderStorage.sliderStep  <= -step) {
            sliderLine.style.transition = 'none';
            sliderLine.offsetWidth; 
    
            sliderStorage.sliderStep = 0; 
    
            sliderLine.style.transition = 'transform 0.5s ease';
            sliderLine.style.transform = `translateX(${sliderStorage.sliderStep}px)`
    
        }
    }
}

/*remove slides after mooving*/
export const removeElementsFromPage = function (sliderLine, count, left, right) {
    const cards = document.querySelectorAll('.exposition__card')
    let i = 0
    while (i < count) {
        if (left && !right) {
            cards[i].remove()
         }else {
            const lastCard = sliderLine.lastElementChild; 
            lastCard.remove(); 
         }
        i++
    }
console.log(sliderLine)
};

/*
plan
1) compairing existed cards with future cards+
2) fix sistem to change slides+
3) add slides mover +
4) add state- (create a switcher)
  4.1) add staack with old slides +
  4.2) add function returning slides to render -
*/