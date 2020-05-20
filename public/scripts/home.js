import * as util from './util.js'
import * as navigation from './navigation.js'
import * as subscribe from './subscription.js'
import * as prod from './product_anim.js'


// Handle loading animation here of the page if want...

// Handle shopping page all activity here....


// homepage animation functions....



let featured_sec_anim = () => {
    let featured_prod_imgs = util.eleCls('featured_prod_img');
    let featured_view_more = util.eleCls('featured_view_more');
    let featured_prod_abouts = util.eleCls('featured_prod_about');
    for (let i = 0; i < featured_prod_imgs.length; i++) {
        let featured_prod_img = featured_prod_imgs[i].getBoundingClientRect();
        if (featured_prod_img.top <= window.innerHeight * .75 && i % 2 == 0) {
            util.set_style(featured_prod_imgs[i], { opacity: 1, animation: 'pullLeft 1.5s ease' });            
        }
        if (featured_prod_img.top <= window.innerHeight * .75 && i % 2 != 0) {
            util.set_style(featured_prod_imgs[i], { opacity: 1, animation: 'pullRight 1.5s ease' });
        }
        if (window.innerWidth <= 768) {
            if (featured_prod_img.top >= 0 && featured_prod_img.bottom <= (window.innerHeight * 1.15 || document.documentElement.clientHeight * 1.15)) {
                util.set_style(featured_view_more[i], { opacity: '.6' });
            }
            else {
                util.set_style(featured_view_more[i], { opacity: '0' });
            }
        }
    }
    for (let i = 0; i < featured_prod_abouts.length; i++) {
        let featured_prod_about = featured_prod_abouts[i].getBoundingClientRect();
        if (featured_prod_about.top <= window.innerHeight * .75 && i % 2 == 0)
            util.set_style(featured_prod_abouts[i], { opacity: 1, animation: 'fadeInLeft 2s' });
        if (featured_prod_about.top <= window.innerHeight * .75 && i % 2 != 0) 
            util.set_style(featured_prod_abouts[i], { opacity: 1, animation: 'fadeInRight 2s' });
    }
}
let body_back_img = ()=>{
    const body = document.getElementsByTagName('body'); 
    const img_path = ['/images/home_back_1.png','/images/home_back_4.jpg'];
    let it = 1;
    setInterval(()=>{
        if(it>1) it = 0;
        util.set_style(body[0],{backgroundImage:`url('${img_path[it]}')`});
        it++;
    },5000);
}

// homepage animation handling...
window.addEventListener('scroll', () => {
    prod.prod_sec_Anim();
    featured_sec_anim();
    util.scroll_top_event();
    subscribe.animate();
    navigation.animate();
});


// utility function calls if needed...
body_back_img();
navigation.handleMenu();




// temoporary development helper

let temp_prod_img = ()=>{
    let prod_img = util.eleCls('product_img')
    let prod_img_path = [
        '/images/sample_1.jpg','/images/sample_2.png',
        '/images/sample_3.png','/images/sample_4.png',
        '/images/sample_5.png','/images/sample_6.jpg',
        '/images/sample_7.jpg','/images/sample_8.jpg',
        '/images/sample_9.png'
    ]
    let it = 0
    for(let i = 0;i<prod_img.length;i++){
        util.set_style(prod_img[i],{backgroundImage:`url('${prod_img_path[it]}')`})
        it = (it>=8) ? it = 0 : ++it
    }
}
temp_prod_img()