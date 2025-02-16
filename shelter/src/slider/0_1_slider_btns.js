import clickHandler from "./0_0_click_handler";
const btnL = document.querySelector('.btn--left');
const btnR = document.querySelector('.btn--right');
let isAnimating = false;

function handleButtonClick(isLeft, isRight) {
    if (isAnimating) return;
    
    isAnimating = true;

    // Добавляем класс, чтобы отключить кнопки
    btnL.classList.add('btn--disabled');
    btnR.classList.add('btn--disabled');

    clickHandler(isLeft, isRight);

    // Удаляем класс после завершения анимации
    setTimeout(() => {
        isAnimating = false;
        btnL.classList.remove('btn--disabled');
        btnR.classList.remove('btn--disabled');
    }, 510); 
}

btnL.addEventListener('click', () => handleButtonClick(true, false));
btnR.addEventListener('click', () => handleButtonClick(false, true));