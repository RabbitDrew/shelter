import { stor } from "../global/0_storage";
const moveLeft = function (sliderLine, win) { 
    win.style.justifyContent = 'flex-end';
    
    const width = win.offsetWidth; 
    const computedStyle = getComputedStyle(sliderLine);
    const gap = parseInt(computedStyle.getPropertyValue('gap')); 

    const step = width + gap; 
    const totalWidth = sliderLine.scrollWidth; 
    const maxShift = totalWidth - width; 

    stor.pos += step;
    sliderLine.style.transition = 'transform 0.5s ease';
    sliderLine.style.transform = `translateX(${stor.pos}px)`;
    if (stor.pos <= maxShift) {
        sliderLine.style.transition = 'none';
        sliderLine.offsetWidth; 
        stor.pos = 0; 
        sliderLine.style.transition = 'transform 0.5s ease';
        sliderLine.style.transform = `translateX(${stor.pos}px)`;

    }

console.log(stor.pos)
} 
export default moveLeft