
(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btn',
        widthEnabled: 1024 
    })
    
})()