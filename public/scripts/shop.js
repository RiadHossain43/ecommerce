import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'
import * as prod from './common_scripts/product_anim.js'



let handler_catagory_bar = () => {
    let catagory_menu = util.eleID('catagory_menu')
    let catagories = util.eleCls('catagory')
    let sub_catagories = util.eleCls('sub_catagory')
    let catagory_mob_icon = util.eleCls('catagory_mob_icon')

    if (window.innerWidth < 992) {
        catagory_menu.addEventListener('click', () => {
            for (let i = 0; i < catagories.length; i++) {
                catagories[i].classList.toggle('de_activate_catagory_mobile')
            }
        })
        for (let i = 0; i < catagories.length; i++) {
            catagories[i].addEventListener('click', () => {
                sub_catagories[i].classList.toggle('de_activate_catagory_mobile')
                catagory_mob_icon[i].classList.toggle('catagory_mob_icon_rotate')
            })
        }
    }
}
let habdle_filter_bar = () => {
    let filter_mob_view = util.eleCls('activate_mobile_filter_view')
    let filter_menu = util.eleID('filter_menu')
    let hide_filter_bar = util.eleID('hide_filter_bar')

    if (window.innerWidth < 992) {
        filter_menu.addEventListener('click', () => {
            filter_mob_view[0].classList.add('filter_view_slide_inout')
        })
        hide_filter_bar.addEventListener('click', () => {
            filter_mob_view[0].classList.remove('filter_view_slide_inout')
        })

    }
}

let handle_top_adds_img_slider = () => {
    
    let top_adds_img = util.eleCls('top_add_img')
    let greet = util.eleCls('greet')
    setInterval(() => {
        for (let i = 0; i < top_adds_img.length; i++) {
            top_adds_img[i].classList.toggle('_hide')
            greet[i].classList.toggle('_hide')
        }
    }, 5000)
}
let promotion_mobile_view = () => {
    let promote = util.eleCls('promote')
    let promo_dt = util.eleCls('promo_dt')
    let promo_detail = util.eleCls('promo_detail')
    for (let i = 0; i < promote.length; i++) {
        if (window.innerWidth <= 768) {
            util.set_style(promo_detail[i], { width: '75%', height: '75%', opacity: '.6', border: '3px solid orange' });
            util.set_style(promo_dt[i], { padding: '0px' });
        }
    }
}
window.addEventListener('scroll', () => {
    prod.prod_sec_Anim()
    util.scroll_top_event()
    navigation.animate()
});

navigation.handleMenu()
handler_catagory_bar()
habdle_filter_bar()
handle_top_adds_img_slider()
promotion_mobile_view()