import * as util from './util.js'
let animate = () => {
    let subscribe = util.eleID('subscribe');
    let sb_txt = util.eleID('sb_txt');
    let mail = util.eleID('mail');
    let submit = util.eleID('submit');
    let sb_bound = subscribe.getBoundingClientRect();

    if (sb_bound.top >= 0 && sb_bound.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        util.set_style(sb_txt, { opacity: 1, animation: 'bounceIn .7s' });
        util.set_style(mail, { opacity: 1, animation: 'bounceIn .7s' });
        util.set_style(submit, { opacity: 1, animation: 'bounceIn .7s' });
    }
}

export {animate}