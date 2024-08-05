const headerButtonLogin = document.querySelector('.header-button__login');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg');
const headerTopSlect = document.querySelector('.header-top__slect');
const headerTopSlectBottom = document.querySelector('.header-top__slect-bottom');
const headerTopScIcon = document.querySelector('.header-top__sc-icon');
const headerButtonMobile = document.querySelector('.header-button__mobile');
const modalMenu = document.querySelector('.modal-menu');
const modalButtonclose = document.querySelector('.modal-button__close');
const bacgrountFilter = document.querySelector('.bacgrount-filter');

headerButtonLogin.addEventListener('click', function(){
    modal.classList.add('open')
    headerTopSlectBottom.classList.remove('active')
    bacgrountFilter.classList.remove('open')
    document.body.style.overflow = 'hidden'
})

modalBg.addEventListener('click', function(){
    modal.classList.remove('open')
    document.body.style.overflow = ''
})

headerTopSlect.addEventListener('click', function(){
    headerTopSlectBottom.classList.toggle('active')
    bacgrountFilter.classList.toggle('open')

    
    
    if(headerTopSlectBottom.classList.contains('active')){
        document.body.style.overflow = 'hidden'
        headerTopScIcon.style.transform = 'rotate(0deg)'
    }
    else{
        document.body.style.overflow = 'auto'
        headerTopScIcon.style.transform = 'rotate(-90deg)'
    }
})

headerButtonMobile.addEventListener('click', function(){
    modalMenu.classList.add('open')
    document.body.style.overflow = "hidden"
})

modalButtonclose.addEventListener('click', function(){
    modalMenu.classList.remove('open')
    document.body.style.overflow = ""
})
