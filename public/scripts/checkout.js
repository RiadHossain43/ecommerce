import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'


util.on_page_loaded(()=>{
    let inputs = util.eleCls('input_container')
    let money_amounts = util.eleCls('money_amounts')
   
    let animdelay = 1

    for (let i = 0; i < inputs.length; i++){
        setTimeout(() => {
            util.set_style(inputs[i], { animation: 'fadeInUp 1s ease', opacity: 1 })
           
        }, (++animdelay) * 300)
    }
    for(let i = 0;i<money_amounts.length;i++){
        setTimeout(() => {
            util.set_style(money_amounts[i], { animation: 'fadeInUp 1s ease', opacity: 1 })
        }, (++animdelay) * 300)
    }
})
window.addEventListener('scroll', () => {
    navigation.animate()
    util.scroll_top_event()
});

navigation.handleMenu()
