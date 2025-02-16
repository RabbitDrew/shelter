const removeNextSlide = function (sliderLine, count) {
    for (let i = 0; i < count; i++) {
        const lastChild = sliderLine.querySelector(".exposition__card:last-child"); // Ищем последний элемент
        if (lastChild) {
            lastChild.remove(); 
        } else {
            break; 
    }
}
}
export default removeNextSlide