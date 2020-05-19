import * as navigation from './navigation.js'
import * as util from './util.js'

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

window.addEventListener('scroll', () => {
    navigation.animate();
});

// function calls 
handle_form()
navigation.handleMenu()