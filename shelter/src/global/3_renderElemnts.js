const renderEl = function (parentElement, createdEl, prepend, append) {
    if (prepend && !append) {
        parentElement.prepend(createdEl);
    }else {
        parentElement.append(createdEl);
    }
    
}

export default renderEl