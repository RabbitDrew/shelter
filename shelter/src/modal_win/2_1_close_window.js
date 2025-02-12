const closeModalWindow = function (event, stateWindow) {
    const page = document.querySelector('.page');
    const modalWindow = document.querySelector('.page-modal-win__container');
    const modalWintContentWrapper = document.querySelector('.modal-win__wrapper')
    const wrapperCloseBtn = document.querySelector('.modal-win-close-btn__wrapper');
    const closeBtn = document.querySelector('.modal-win-close-btn')
    if (modalWindow && 
        (event.target === modalWindow || 
         closeBtn.contains(event.target) || 
         modalWintContentWrapper === event.target || 
         wrapperCloseBtn === event.target)) {
         modalWindow.classList.add("modal-win__bg--hide");
        setTimeout(() => {
            modalWindow.classList.remove("page-modal-win__container");
            modalWindow.remove();
            page.style.overflow = ""; 
            stateWindow.winIsOpen = false 
        }, 300);
    }
};

export default closeModalWindow