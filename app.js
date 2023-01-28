let hmenu = document.getElementById('header_menu');
let hmenuHamburger = document.getElementById('header_menu__hamburger');
let toggler = document.getElementById('toggler')
let rtext = document.getElementsByClassName('f-right-text')[0]

hmenu.addEventListener('click',() => {
        if(hmenuHamburger.classList.contains('fa-bars')){
            hmenuHamburger.classList.remove('fa-bars')
            hmenuHamburger.classList.add('fa-x')
        } else if (hmenuHamburger.classList.contains('fa-x')){
            hmenuHamburger.classList.remove('fa-x')
            hmenuHamburger.classList.add('fa-bars')
        }
    
});


