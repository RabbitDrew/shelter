const stateSwitcher = function (param, left, right) {
    if (left && !right) {  
        if (param.moveRight) { 
            param.mainStateSlider = false;  
        } else {
            param.mainStateSlider = true; 
        }

        param.moveLeft = true;
        param.moveRight = false;
    } else if (right && !left) {  
        if (param.moveLeft) {  
            param.mainStateSlider = false;  
        } else {
            param.mainStateSlider = true;  
        }

        param.moveRight = true;
        param.moveLeft = false;
    }
    console.log(param);
};

export default stateSwitcher