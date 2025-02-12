import sliderList from "./1_slider_list"
import elCreator from "./2_create_el"
import renderEl from "./3_renderElemnts"
let cardsArr = []
export const createSliderCardsArr =  (createEl,
                                      renderCallback, 
                                      sliderList,
                                       ) => {
let result = [] 
for (let i =0; i < 1; i++ ){
  sliderList.forEach(cardsDateEl => {
    const cardObj = {}
    /*create card*/
    let  mainBlock =createEl('div', {classOne: 'exposition__card'},{},'')
    let img =createEl('img', {classOne: 'card_img'}, {src:cardsDateEl.image,
                                                    alt:cardsDateEl.nickname
                                                    }, '')
    let title = createEl('h2', {classOne:"card__title"}, {}, cardsDateEl.nickname)
    let btn = createEl('div', {classOne:"card_btn"}, {},'')
    let btnTitle = createEl('h2', {classOne:"card___btn-title"}, {}, 'more')
    let span = createEl('span', {classOne:"caps"}, {}, 'learn ')
    /*render el to the block*/
    renderCallback(mainBlock, img, false, true)
    renderCallback(mainBlock, title, false, true)
    renderCallback(mainBlock, btn, false, true)
    renderCallback(btn, btnTitle, false, true)
    renderCallback(btnTitle, span, true, false)
  
    cardObj['mainBlock'] = mainBlock;
    cardObj['name'] = cardsDateEl.nickname
  result.push(cardObj)
});
}

//console.log(result)
//result.forEach(el=> {console.log(el)})
return result
}
cardsArr = createSliderCardsArr (elCreator,renderEl, sliderList)

export default cardsArr
