import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'

const fields = util.eleCls('field')
const contact_type = util.eleCls('contact_typ')

util.on_page_loaded(()=>{
    let animdelay = 1;
    for (let i = 0; i < fields.length; i++){
        setTimeout(() => {
            util.set_style(fields[i], { animation: 'fadeInUp 1s ease', opacity: 1 })
        }, (++animdelay) * 300)
    }
    for(let i = 0;i<contact_type.length;i++){
        setTimeout(() => {
            util.set_style(contact_type[i], { animation: 'fadeInUp 1s ease', opacity: 1 })
        }, (++animdelay) * 300)
    }
})


window.addEventListener('scroll', () => {
    navigation.animate()
    util.scroll_top_event()
});

navigation.handleMenu()
