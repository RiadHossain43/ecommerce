let eleID = (id) => {
    return document.getElementById(id);
}
let eleCls = (cls) => {
    return document.getElementsByClassName(cls);
}
let set_style = (elem, styles) => {
    Object.assign(elem.style, styles);
}
let scroll_top_event = ()=>{
    let scroll_btn = eleCls('scroll_top');
    const minimum_scroll = 2500;

    if(window.scrollY > minimum_scroll) set_style(scroll_btn[0],{zIndex:1,opacity:1});
    else set_style(scroll_btn[0],{zIndex:-1,opacity:0});

    scroll_btn[0].addEventListener('click',()=>{
       window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    });
}
let on_page_loaded = (cb)=>{
    return window.addEventListener(('load'),cb)
}
export{
    eleID,eleCls,set_style,scroll_top_event,on_page_loaded
}