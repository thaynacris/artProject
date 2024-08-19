
(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btn',
        widthEnabled: 1024 
    })
    
    var carouselPhrases = new Carousel({
        container: '.phrases-slider .slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
    
    var carouselArtmovements = new Carousel({
        container: '.artmovements-slideshow',
        itens: 'figure',
        btnPrev: '.prev-artmovements',
        btnNext: '.next-artmovements'
    })
})()