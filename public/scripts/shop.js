import * as navigation from './navigation.js'
import * as util from './util.js'
import * as prod from './product_anim.js'

let handler_catagory_bar = () => {
    let catagory_menu = util.eleID('catagory_menu')
    let catagories = util.eleCls('catagory')
    let sub_catagories = util.eleCls('sub_catagory')

    if (window.innerWidth < 992) {
        catagory_menu.addEventListener('click', () => {
            for (let i = 0; i < catagories.length; i++) {
                catagories[i].classList.toggle('de_activate_catagory_mobile')
            }
        })
        for (let i = 0; i < catagories.length; i++) {
            catagories[i].addEventListener('click', () => {
                sub_catagories[i].classList.toggle('de_activate_catagory_mobile')
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
        hide_filter_bar.addEventListener('click',()=>{
            filter_mob_view[0].classList.remove('filter_view_slide_inout')
        })
        
    }
}

let handle_top_adds_img_slider = ()=>{
    let img_path = ['/images/home_back_3.jpg','/images/home_back_4.jpg']
    let top_adds_img_slider = util.eleID('top_adds_img_slider')
    let it = 1
    setInterval(()=>{
        if(it>1) it = 0;
        top_adds_img_slider.innerHTML = ` <img src="${img_path[it]}" alt="" class="centralize"> `
        it++
    },5000)
}

window.addEventListener('scroll', () => {
    prod.prod_sec_Anim()
    navigation.animate();
});

navigation.handleMenu()
handler_catagory_bar()
habdle_filter_bar()
handle_top_adds_img_slider()