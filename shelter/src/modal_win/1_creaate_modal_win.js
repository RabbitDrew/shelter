import elCreator from "../global/2_create_el";
import renderEl from "../global/3_renderElemnts";
import dataList from "./0_2_moidal_win_data";

let modalWinArr = [];
const modalWindCreator = function (creatorCalbback,  dataList) {
  let result = [];
  dataList.forEach((cardObj) => {
    const modalWinObj = {};
    const modalWinWrapper = creatorCalbback(
      "section",
      {
        classOne: "page-modal-win__container",
      },
      {},
      ""
    );
    //modalWinwrapper
    const modalWin = creatorCalbback(
      "div",
      {
        classOne: "modal-win__wrapper",
        classTwo: "modal-win--hide",
      },
      {},
      ""
    );
    //close btn block
    const closeBtnWrapper = creatorCalbback(
      "div",
      {
        classOne: "modal-win-close-btn__wrapper",
      },
      {},
      ""
    );
    const closeBtn = creatorCalbback(
      "div",
      {
        classOne: "modal-win-close-btn",
      },
      {},
      ""
    );
    const cross = creatorCalbback(
      "h2",
      {
        classOne: "cross",
      },
      {},
      "X"
    );
    //content block
    const modalWinContentWrapper = creatorCalbback(
      "div",
      {
        classOne: "modal-win-content__wrapper",
      },
      {},
      ""
    );
    const modalWinContent = creatorCalbback(
      "div",
      {
        classOne: "modal-win-content",
      },
      {},
      ""
    );

    //immg block
    const modalWinImgWrapper = creatorCalbback(
      "div",
      {
        classOne: "modal-win-img__wrapper",
      },
      {},
      ""
    );
    const petImg = creatorCalbback(
      "img",
      { classOne: "modal-win-img" },
      { src: cardObj.img, alt: cardObj.name },
      ""
    );

    //about wwrapper
    const aboutPetWrapper = creatorCalbback(
      "div",
      {
        classOne: "madal-win__about-pet__wrapper",
      },
      {},
      ""
    );
    const aboutPetHeader = creatorCalbback(
      "div",
      {
        classOne: "about-pet__header-wrapper",
      },
      {},
      ""
    );

    const aboutPetTitle = creatorCalbback(
      "h2",
      {
        classOne: "about-pet__title",
      },
      {},
      cardObj.name
    );

    const aboutPetSubtitle = creatorCalbback(
      "h2",
      {
        classOne: "about-pet__subtitle",
      },
      {},
      cardObj.type + " - " + cardObj.breed
    );

    const aboutPetDiscription = creatorCalbback(
      "p",
      {
        classOne: "about-pet_description",
      },
      {},
      cardObj.description
    );

    //block_param
    const aboutPetParam = creatorCalbback(
      "ul",
      {
        classOne: "about-pet__param",
      },
      {},
      ""
    );


    // refactor later
    //age
    const paramAge = creatorCalbback(
      "li",
      {
        classOne: "param__item",
      },
      {},
      ""
    );
    const paramAgeTitle = creatorCalbback(
      "h2",
      {
        classOne: "param__title",
      },
      {},
      "Age" + ": "
    );
    const paramAgeSubtitle  = creatorCalbback(
      "span",
      {
        classOne: "param__subtitle",
      },
      {},
      cardObj.age
    );
    //inoculation
    const paramInoculation = creatorCalbback(
      "li",
      {
        classOne: "param__item",
      },
      {},
      ""
    );
    const paramInoculationTitle = creatorCalbback(
      "h2",
      {
        classOne: "param__title",
      },
      {},
      "inoculations" + ": "
    );
    const paramInoculationSubtitle  = creatorCalbback(
      "span",
      {
        classOne: "param__subtitle",
      },
      {},
      cardObj.inoculations
    );
    //diseases
    const paramDiseases = creatorCalbback(
      "li",
      {
        classOne: "param__item",
      },
      {},
      ""
    );
    const paramDiseasesTitle = creatorCalbback(
      "h2",
      {
        classOne: "param__title",
      },
      {},
      "Diseases" + ": "
    );
    const paramDiseasesSubtitle  = creatorCalbback(
      "span",
      {
        classOne: "param__subtitle",
      },
      {},
      cardObj.diseases
    );
    //parasites
    const paramParasites = creatorCalbback(
      "li",
      {
        classOne: "param__item",
      },
      {},
      ""
    );
    const paramParasitesTitle = creatorCalbback(
      "h2",
      {
        classOne: "param__title",
      },
      {},
      "Parasites" + ": "
    );

    const paramParasitesSubtitle  = creatorCalbback(
      "span",
      {
        classOne: "param__subtitle",
      },
      {},
      cardObj.parasites
    );
    //bg of modal window
    modalWinWrapper.append(modalWin);

    modalWin.append(closeBtnWrapper);

    closeBtnWrapper.append(closeBtn);
    closeBtn.append(cross);

    modalWin.append(modalWinContentWrapper);
    modalWinContentWrapper.append(modalWinContent);

    modalWinContent.append(modalWinImgWrapper);
    modalWinImgWrapper.append(petImg);

    modalWinContent.append(aboutPetWrapper);

    aboutPetWrapper.append(aboutPetHeader);
    //title and subtitle
    aboutPetHeader.append(aboutPetTitle);
    aboutPetHeader.append(aboutPetSubtitle);
    //about pet description
    aboutPetWrapper.append(aboutPetDiscription);
    //about pet parametrs
    aboutPetWrapper.append(aboutPetParam);
    //age
    aboutPetParam.append(paramAge);
    paramAge.append(paramAgeTitle);
    paramAgeTitle.append(paramAgeSubtitle)
    //inpculations
    aboutPetParam.append(paramInoculation);
    paramInoculation.append(paramInoculationTitle);
    paramInoculationTitle.append(paramInoculationSubtitle)
    //diseases
    aboutPetParam.append(paramDiseases);
    paramDiseases.append(paramDiseasesTitle);
    paramDiseasesTitle.append(paramDiseasesSubtitle)
    //parasites
    aboutPetParam.append(paramParasites);
    paramParasites.append(paramParasitesTitle);
    paramParasitesTitle.append(paramParasitesSubtitle)

    modalWinObj["mainBlock"] = modalWinWrapper;
    modalWinObj['name'] = cardObj.name
    result.push(modalWinObj);
  });
  return result;
};

modalWinArr = modalWindCreator(elCreator, dataList);
//console.log(modalWinArr)
export default modalWinArr


//test call
const main = document.querySelector(".page-main");
//renderEl(main, testObj[0], false, true);
