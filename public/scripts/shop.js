import * as navigation from './navigation.js'
import * as util from './util.js'
import * as prod from './product_anim.js'
// let prod_sec_Anim = () => {
//     let products = util.eleCls('product');
    
//     let detail = util.eleCls('detail');
//     let dt = util.eleCls('dt');
    
//     for (let i = 0; i < products.length; i++) {
//         let product = products[i].getBoundingClientRect();

//         if (product.top <= window.innerHeight * .75) {
//             util.set_style(products[i], { opacity: 1, animation: 'fadeInUp .75s' })
//         }

//         if (window.innerWidth <= 768) {
//             if (product.top >= 0 && product.bottom <= (window.innerHeight * 1.15 || document.documentElement.clientHeight * 1.15)) {
//                 util.set_style(detail[i], { width: '75%', height: '75%', opacity: '.6' });
//                 util.set_style(dt[i], { padding: '0px' });
//             }
//             else {
//                 util.set_style(detail[i], { width: '95%', height: '95%', opacity: '0' });
//                 util.set_style(dt[i], { padding: '20px 0px' });
//             }
//         }
//     }
// }

window.addEventListener('scroll', () => {
    prod.prod_sec_Anim()
    navigation.animate();
});

navigation.handleMenu()