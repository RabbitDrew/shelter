import cardsArr from "./4_create_slider_cards_arr";

export let shuffleddArr = []
export const getShuffledArr = (cardsArr) => {
    let  arr = [...cardsArr]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];

      }
      return arr 
}

shuffleddArr = getShuffledArr(cardsArr)
/*shuffleddArr.forEach(el => {
    console.log(el.mainBlock)
});*/
