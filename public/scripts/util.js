let eleID = (id) => {
    return document.getElementById(id);
}
let eleCls = (cls) => {
    return document.getElementsByClassName(cls);
}
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}

export{
    eleID,eleCls,set_style
}