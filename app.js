let hmenu = document.getElementById('header_menu');
let hmenuHamburger = document.getElementById('header_menu__hamburger');
let fDash = document.getElementById('form_dashboard')

hmenu.addEventListener('click',() => {
        if(hmenuHamburger.classList.contains('fa-bars')){
            hmenuHamburger.classList.remove('fa-bars')
            hmenuHamburger.classList.add('fa-x')
            fDash.classList.add('form-dashboard--display')
        } else if (hmenuHamburger.classList.contains('fa-x')){
            hmenuHamburger.classList.remove('fa-x')
            hmenuHamburger.classList.add('fa-bars')
            fDash.classList.remove('form-dashboard--display')
        }
});

// fDash.addEventListener('click', () => {
//     if()
// })


