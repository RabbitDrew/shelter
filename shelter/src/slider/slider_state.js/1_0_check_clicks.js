const btnsState = function (param, left, right) {
   if (left && !right) {
    if (param.leftCount >=0 && param.leftCount <2) {
        param.leftCount ++
       if (param.rightCount >0 && param.rightCount <=2) {
            param.rightCount --
        }
    }
   }else {
    if (param.rightCount >=0 && param.rightCount <2) {
        param.rightCount ++
       if (param.leftCount >0 && param.leftCount <=2) {
            param.leftCount --
        }
   }
 }
   
}

export default btnsState