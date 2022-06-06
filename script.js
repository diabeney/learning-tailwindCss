const menuBtn = document.querySelector('header > button');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    let visibility = nav.getAttribute('data-visible');
    
    if(visibility == 'false') {
        nav.setAttribute('data-visible',true); 
        nav.setAttribute('aria-expanded',true);
    }else {
        nav.setAttribute('data-visible',false);
        nav.setAttribute('aria-expanded',false);
    }
    


})

