import * as util from './common_scripts/util.js'

const signup_btn = util.eleID('signup_btn');
const signin_btn = util.eleID('signin_btn');
const signin_cont = util.eleID('signin_content');
const signup_cont = util.eleID('signup_content');
const signup_form = util.eleID('signup_form');
const signin_form = util.eleID('signin_form');
const sign_in_user = util.eleID('sign_in_user');
const password = util.eleID('password');
const create_ac = util.eleID('create_ac');
const already_hv = util.eleID('already_hv');
const container = util.eleID('container')
const submit = util.eleCls('Submit');

if (window.innerWidth >= 900) {
    signup_btn.addEventListener('click', (e) => {
        signup_cont.classList.remove('left_shift');
        signin_form.classList.add('left_shift');
        signup_form.classList.remove('right_shift');
        signin_cont.classList.add('right_shift');
    });

    signin_btn.addEventListener('click', (e) => {
        signup_cont.classList.add('left_shift');
        signin_form.classList.remove('left_shift');
        signup_form.classList.add('right_shift');
        signin_cont.classList.remove('right_shift');
    });
}

if (window.innerWidth < 900) {
    signup_cont.classList.remove('left_shift');
    signup_form.classList.remove('right_shift');

    create_ac.addEventListener('click', (e) => {
        signin_form.style.left = '0';
        signin_cont.style.right = '100%';
    });
    already_hv.addEventListener('click', (e) => {
        signup_form.style.right = '0';
        signup_cont.style.left = '100%';
    });
    signup_btn.addEventListener('click', (e)=>{
        signin_cont.style.right = '0%';
        signup_form.style.right = '100%';
    });
    signin_btn.addEventListener('click', (e)=>{
        signin_form.style.left = '100%';
        signup_cont.style.left = '0%';
    });
}
util.on_page_loaded(()=>{
    if(window.innerWidth>992){
        util.set_style(container,{animation:'popLogIn 1s',opacity:1})
    }
})
for (var i = 0; i < submit.length; i++) {
    submit[i].addEventListener('click', (e)=>{
        e.target.parentElement.submit();
    });
}