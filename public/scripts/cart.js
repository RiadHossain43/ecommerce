import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'

const amount = util.eleCls('amount')
const remove_prod = util.eleCls('remove_prod')


let handle_quantity = ()=>{
    const amount_increase = util.eleCls('amount_increase')
    const amount_decrease= util.eleCls('amount_decrease')
    for(let i=0;i<amount_increase.length;i++){
        amount_increase[i].addEventListener('click',(event)=>{
            event.preventDefault()
            amount[i].value++
        })
        amount_decrease[i].addEventListener('click',(event)=>{
            event.preventDefault()
            amount[i].value--
            if(amount[i].value<1) amount[i].value = 1
        })
    }
}
let remove_handler =()=>{
    for(let i=0;i<remove_prod.length;i++){
        remove_prod[i].addEventListener('click',(e)=>{
            let product = e.target.parentNode.parentNode.parentNode
            product.classList.add('remove_prod_anim')
            product.addEventListener('transitionend',()=>{
                    product.remove()
            })
        })
    }
}
window.addEventListener('scroll', () => {
    navigation.animate();
});

navigation.handleMenu()
handle_quantity()
remove_handler()