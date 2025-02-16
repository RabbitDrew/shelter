const removePrevSlide = function (sliderLine, count) {
    const children = sliderLine.querySelectorAll('.exposition__card'); // Убедитесь, что этот селектор выбирает только нужные элементы
    for (let i = 0; i < count; i++) {
        if (children[i]) {
            children[i].remove(); 
        }
    }
};
export default removePrevSlide