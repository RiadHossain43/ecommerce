import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'

const amount = util.eleID('amount')
const product_img_container = util.eleID('product_img_container')
const buying_info = util.eleID('buying_info')
const full_detail = util.eleID('full_detail')
const related_prod = util.eleCls('related_product')

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


window.addEventListener('load',()=>{
    util.set_style(product_img_container,{animation:'popIn 1s',opacity:1})
    setTimeout(()=>{
        util.set_style(buying_info,{animation:'fadeInUp 1s',opacity:1})
    },1000)
})

window.addEventListener('scroll', () => {
    let full_detail_bound = full_detail.getBoundingClientRect()

    if(full_detail_bound.top <= window.innerHeight*.75){
        util.set_style(full_detail,{animation:'fadeInUp 1s',opacity:1})
    }
    for(let i =0 ;i<related_prod.length;i++){
        let related_prod_bound = related_prod[i].getBoundingClientRect()
        if(related_prod_bound.top <= window.innerHeight*.75){
            util.set_style(related_prod[i],{animation:'fadeInUp 1s',opacity:1})
        }
    }
    
    navigation.animate()
});

// function calls 
handle_form()
handle_descriptuon()
navigation.handleMenu()