/*refatcor to difficult an repeated code*/
/*reworck if condition repeated code*/
/*rework according to example in module 1 render elements on page (state example)*/
const changePage = function (arrOfCards, renderCallback, petsStorage) {
  //console.log(petsStorage.counter)
  const winWidth = window.innerWidth
  const ourFriendsBlock = document.querySelector('.our-friends-list')

  const num = document.querySelector(".num").textContent;
  const arrIndex = Number(num)-1;

  let pageMatrix = []
  
  if(winWidth > 768) {
      ourFriendsBlock.innerHTML=''
      pageMatrix = [...arrOfCards]
      for (let i =  pageMatrix.length - 1; i > 0; i--) {
       const j = Math.floor(Math.random() * (i + 1)); 
       [ pageMatrix[i],  pageMatrix[j]] = [ pageMatrix[j],  pageMatrix[i]];
 
       pageMatrix.forEach(card => {
         renderCallback(ourFriendsBlock, card.mainBlock, false, true)
       }); 
    }
  }else if (winWidth > 450 && winWidth <=768) {
    /*get the idea how cycle works*/
       ourFriendsBlock.innerHTML=''
      for (let i = 0; i < 8; i++) {
        let subArray = [];
        for (let j = 0; j < 6; j++) {
          subArray.push(arrOfCards[(i * 6 + j) % arrOfCards.length]);
        }
        pageMatrix.push(subArray);
      }
      for (let ind = 0; ind<pageMatrix.length; ind++) {
        for (let i =  pageMatrix[ind].length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); 
          [ pageMatrix[ind][i],  pageMatrix[ind][j]] = [ pageMatrix[ind][j],  pageMatrix[ind][i]];
      }
    }
    pageMatrix[arrIndex].forEach(card => {
      renderCallback(ourFriendsBlock, card.mainBlock, false, true)
    }); 
}else {
     ourFriendsBlock.innerHTML=''
    for (let i = 0; i < 16; i++) {
      let subArray = [];
      for (let j = 0; j < 3; j++) {
        subArray.push(arrOfCards[(i * 3 + j) % arrOfCards.length]);
      }
      pageMatrix.push(subArray);
    }
    for (let ind = 0; ind<pageMatrix.length; ind++) {
      for (let i =  pageMatrix[ind].length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [ pageMatrix[ind][i],  pageMatrix[ind][j]] = [ pageMatrix[ind][j],  pageMatrix[ind][i]];
    }
  }
  pageMatrix[arrIndex].forEach(card => {
    renderCallback(ourFriendsBlock, card.mainBlock, false, true)
  });
  
}



}

export default changePage;
