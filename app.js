const headerButtonLogin = document.querySelector('.header-button__login');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-bg');

headerButtonLogin.addEventListener('click', function(){
    modal.classList.add('open')
    document.body.style.overflow = 'hidden'
})

modalBg.addEventListener('click', function(){
    modal.classList.remove('open')
    document.body.style.overflow = ''
})