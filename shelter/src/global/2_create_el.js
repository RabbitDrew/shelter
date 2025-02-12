const elCreator = function (el, 
                            classNamesObj = {}, 
                            attributeObj = {},
                            elementContent='') {
    const element = document.createElement(el)
    
    if(Object.keys(classNamesObj).length > 0) {
        for (let key in classNamesObj)
        element.classList.add(classNamesObj[key]);
    }

    if (Object.keys(attributeObj).length > 0) {
        for (const key in attributeObj) {
            if (attributeObj.hasOwnProperty(key)) {
                element.setAttribute(key, attributeObj[key]);
            }
        }
    }

    if (elementContent!=='') {
        element.textContent = elementContent
    }

    return element
}

export default elCreator

