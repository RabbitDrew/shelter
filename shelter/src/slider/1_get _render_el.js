import cardsArr from "../global/4_create_slider_cards_arr";

const getRenderEl = (shuffledArr, count) => {
let result = [];

let cardsOnPage = document.querySelectorAll('.card__title');
const cardsArray = Array.from(cardsOnPage);
const lastThreeCards = cardsArray.slice(-3);
const namesOnPage = lastThreeCards.map(el => el.textContent.toLowerCase().trim());
  shuffledArr.forEach((card, i) => {

  let cardName = card.name.toLowerCase().trim();
    if (!namesOnPage.includes(cardName) && result.length < count) {
      result.push(card);
  } 
 

});
//result.forEach(el => { console.log(el.name) });
return result;

}

export default getRenderEl