import * as navigation from './common_scripts/navigation.js'
import * as util from './common_scripts/util.js'



window.addEventListener('scroll', () => {
    navigation.animate()
});

navigation.handleMenu()
