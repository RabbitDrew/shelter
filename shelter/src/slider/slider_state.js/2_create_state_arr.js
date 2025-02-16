const createStateArr = function (currCards, stateStorage, baseCardsArr, left, right) {
  let result = [];
  if (stateStorage.mainStateSlider === true) {
      let currCardsPage = Array.from(document.querySelectorAll('.card__title'));
      let frontItems = [];
      let backItems = [];
      currCardsPage.forEach((name, i) => {
          let namePet = name.textContent.trim();
  let foundCardsByNamePet = baseCardsArr.filter(el => el.name === namePet);
              frontItems.unshift(...foundCardsByNamePet); 
              backItems.push(currCards[i]); 
      });

      frontItems = frontItems.slice(0, 3);  
      backItems = backItems.slice(0, 3);    
      result = [...frontItems, ...backItems]; 
     // result.forEach(el=>{console.log(el.name)})
      stateStorage.stateData = [...result];
  } else {
      result = [...stateStorage.stateData];
      //result.forEach(el=>{console.log(el.name)})
  }
  
  return result;
}

export default createStateArr;
