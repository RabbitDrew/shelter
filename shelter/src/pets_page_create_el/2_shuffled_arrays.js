import arrOfDifferentCards from "./1_create_arr_render_el";

let shuffledArrays = [];
export const getShuffledArrays = (arrOfDifferentCards) => {
    console.log(arrOfDifferentCards)
    let result = [];
    for (let i = arrOfDifferentCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrOfDifferentCards[i], arrOfDifferentCards[j]] = [arrOfDifferentCards[j], arrOfDifferentCards[i]];
    }
    result.push(...arrOfDifferentCards);
    return result;
}

shuffledArrays = getShuffledArrays(arrOfDifferentCards);
export default shuffledArrays
console.log(shuffledArrays);