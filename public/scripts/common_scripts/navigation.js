import * as util from './util.js'

const header = util.eleID('header');
const nav = util.eleID('nav');
const company_info = util.eleID('company_info');

let animate = () => {

    let headbound = header.getBoundingClientRect();
    let company_info_bound = company_info.getBoundingClientRect();
    if (headbound.top < -120)
        util.set_style(nav, { backgroundColor: 'black', boxShadow: '0 0 0 black' });
    else
        util.set_style(nav, { backgroundColor: 'transparent', boxShadow: '0 6px 20px black'}); //, boxShadow: '0 6px 20px black' 

    if (company_info_bound.top < -company_info.offsetHeight) 
        util.set_style(nav,{position:'fixed'});
    else 
        util.set_style(nav,{position:'sticky'});
    
}

let handleMenu = () => {
    let hamberger = util.eleID('hamberger');
    let menu = util.eleID('menu');
    let back = util.eleID('backlink');
    let link = util.eleCls('mobile_link');
    hamberger.addEventListener('click', () => {
        util.set_style(menu, { clipPath: "circle(1200px at 100% 0%)" });
        let animDelay = .3;
        for (var i = 0; i < link.length; i++) {
            util.set_style(link[i], { opacity: 1, animation: `slide-right 0.9s both ${animDelay}s` });
            animDelay += .3;
        }
    });
    back.addEventListener('click', () => {
        util.set_style(menu, { clipPath: "circle(0px at 100% 0%)" });
        for (var i = 0; i < link.length; i++) {
            util.set_style(link[i], { opacity: 0, animation: "" });
        }
    });
}

export {
    animate, handleMenu
}