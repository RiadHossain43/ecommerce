import * as util from './util.js'
import * as navigation from './navigation.js'
import * as subscribe from './subscription.js'

// Handle loading animation here of the page if want...

// Handle shopping page all activity here....


// homepage animation functions....

let prod_sec_Anim = () => {
    let products = util.eleCls('product');
    
    let detail = util.eleCls('detail');
    let dt = util.eleCls('dt');
    
    for (let i = 0; i < products.length; i++) {
        let product = products[i].getBoundingClientRect();

        if (product.top <= window.innerHeight * .75) {
            util.set_style(products[i], { opacity: 1, animation: 'fadeInUp .75s' })
        }

        if (window.innerWidth <= 768) {
            if (product.top >= 0 && product.bottom <= (window.innerHeight * 1.15 || document.documentElement.clientHeight * 1.15)) {
                util.set_style(detail[i], { width: '75%', height: '75%', opacity: '.6' });
                util.set_style(dt[i], { padding: '0px' });
            }
            else {
                util.set_style(detail[i], { width: '95%', height: '95%', opacity: '0' });
                util.set_style(dt[i], { padding: '20px 0px' });
            }
        }
    }
}

let featured_sec_anim = () => {
    let featured_prod_imgs = util.eleCls('featured_prod_img');
    let featured_view_more = util.eleCls('featured_view_more');
    let featured_prod_abouts = util.eleCls('featured_prod_about');
    for (let i = 0; i < featured_prod_imgs.length; i++) {
        let featured_prod_img = featured_prod_imgs[i].getBoundingClientRect();
        if (featured_prod_img.top <= window.innerHeight * .75 && i % 2 == 0) {
            util.set_style(featured_prod_imgs[i], { opacity: 1, animation: 'pullLeft 1.5s' });            
        }
        if (featured_prod_img.top <= window.innerHeight * .75 && i % 2 != 0) {
            util.set_style(featured_prod_imgs[i], { opacity: 1, animation: 'pullRight 1.5s' });
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

// homepage animation handling...

window.addEventListener('scroll', () => {
    prod_sec_Anim();
    featured_sec_anim();
    subscribe.animate();
    navigation.animate();
});


// utility function calls if needed...

navigation.handleMenu();
