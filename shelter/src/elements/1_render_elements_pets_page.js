//refactor shaffledArr for main page
import shuffledArrays from "../pets_page_create_el/2_shuffled_arrays"
import renderEl from "../global/3_renderElemnts"
const ourFriendsBlock = document.querySelector(".our-friends-list")
const renderPets = function (calbackRender, shuffledArr, count, windowWidth) {
    ourFriendsBlock.innerHTML = '';
    for (let i =0; i < count; i ++) {
        // start page for different sizes
        if (windowWidth >768) {
            calbackRender(ourFriendsBlock,shuffledArr[0][i].mainBlock,false, true)
        }else if (windowWidth >321 && windowWidth <= 768) {
            calbackRender(ourFriendsBlock,shuffledArr[1][i].mainBlock,false, true)
        }else {
            calbackRender(ourFriendsBlock,shuffledArr[2][i].mainBlock,false, true)
        }
        
    }
}
const updatePetsDisplay = () => {
    const windowWidth = window.innerWidth;
    let count;

    if (windowWidth >= 769) {
        count = 8; 
    } else if (windowWidth > 450 && windowWidth <= 768) {
        count = 6;
    } else {
        count = 3; 
    }

    renderPets(renderEl, shuffledArrays, count, windowWidth);
};

updatePetsDisplay();
window.addEventListener('resize', updatePetsDisplay);
 