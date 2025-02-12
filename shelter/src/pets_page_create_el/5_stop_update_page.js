const changeBtnStyle = function (petsStorage) {
  let winWidth = window.innerWidth;
  let paginationBtnLeft = document.querySelectorAll(".arrows--left");
  let paginationBtnRight = document.querySelectorAll(".arrows--right");


    paginationBtnLeft.forEach((btn) => {
      if (petsStorage.counter >= 2) {
        btn.classList.remove("btn--disable");
        btn.classList.add("arrow--left--hover");
        btn.style.border = "var(--color-accent) 2px solid";
        btn.style.color = "#292929";
        btn.style.transition = "all .1s ease";
      } else {
        btn.classList.add("btn--disable");
        btn.classList.remove("arrow--left--hover");
        btn.style.border = "#cdcdcd 2px solid";
        btn.style.color = "var(--color-menu)";
        btn.style.transition = "all .1s ease";
      }
    });

    paginationBtnRight.forEach((btn) => {
      if (
        (winWidth > 768 && petsStorage.counter === 6) ||
        (winWidth >= 321 && winWidth <= 768 && petsStorage.counter === 8) ||
        (winWidth < 321 && petsStorage.counter === 16)
      ) {
        btn.classList.add("btn--disable");
        btn.classList.remove("arrow--left--hover");
        btn.style.border = "#cdcdcd 2px solid";
        btn.style.color = "var(--color-menu)";
        btn.style.transition = "all .1s ease"; 
      } else  {
        btn.classList.remove("btn--disable");
        btn.classList.add("arrow--left--hover");
        btn.style.border = "var(--color-accent) 2px solid";
        btn.style.color = "#292929";
        btn.style.transition = "all .1s ease";
      }
    });
  }

export default changeBtnStyle;
