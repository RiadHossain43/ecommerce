 let load = () => {

    window.addEventListener('load', () => {
        let loader = util.eleID('loader');
        let body = util.eleID('body');
        setTimeout(() => {
            util.set_style(body, { display: 'block' });
            loader.style.animation = 'fadeaway .8s ease';
            util.set_style(loader, { animation: 'fadeaway .8s ease' });
            setTimeout(() => {
                util.set_style(loader, { display: 'none' });
                let greetAnim = () => {
                    let greet = util.eleID('greetings');
                    let logo = util.eleID('logo');
                    let hamberger = util.eleID('hamberger');
                    util.set_style(greet, { animation: 'greetInUp .75s', opacity: .8 });
                    util.set_style(logo, { animation: "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both" });
                    util.set_style(hamberger, { animation: "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both" })
                }
                greetAnim();
            }, 800);
        }, 1300);
    });
    
}

export {load}