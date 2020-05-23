import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'

const amount = util.eleID('amount')

let handle_form = ()=>{
    const amount_increase = util.eleID('amount_increase')
    const amount_decrease= util.eleID('amount_decrease')
    const size = util.eleCls('size')
    
    amount_increase.addEventListener('click',(event)=>{
        event.preventDefault()
        amount.value++
    })
    amount_decrease.addEventListener('click',(event)=>{
        event.preventDefault()
        amount.value--
        if(amount.value<1) amount.value = 1
    })
    
}

let handle_descriptuon = ()=>{
    let detail_link = util.eleCls('detail_link')
    let all_prod_info_container = util.eleCls('all_prod_info_container')
    for(let i = 0;i<detail_link.length;i++ ){
        detail_link[i].addEventListener('click',(e)=>{
            for(let i =0;i<detail_link.length;i++){
                if(e.target===detail_link[i])
                    all_prod_info_container[i].classList.add('activate')
                else all_prod_info_container[i].classList.remove('activate')
            }
        })
    }
}

window.addEventListener('scroll', () => {
    navigation.animate();
});

// function calls 
handle_form()
handle_descriptuon()
navigation.handleMenu()